import {endsWith, forEach, map} from 'lodash';
import {Platform} from 'react-native';
import {
  Options,
  requestSharedWebCredentials,
  setSharedWebCredentials,
} from 'react-native-keychain';
import {
  CLOUD_BACKUP_ERRORS,
  encryptAndSaveDataToCloud,
  getDataFromCloud,
} from '@helpers/cloudBackup';
import {
  AllOrangeWallets,
  allWalletsKey,
  WalletBackupTypes,
  selectedWalletKey,
  privateKeyKey,
  seedPhraseKey,
  OrangeWallet,
} from '@libs/constants';
import * as keychain from './keychain';
import logger from 'logger';
import {createWallet, allWalletsVersion} from './wallet';

/**
 *  Todo - 1. Back up wallet to cloud
 *  Todo - 2. add wallet to cloud backup
 *  Todo - 3. should find the latest back up
 *  Todo - 4. should restore wallet from cloud
 * Todo - 5. should store backup password to keychain
 * */

interface BackedUpData {
  [key: string]: string;
}

interface BackupUserData {
  wallets: OrangeWallet;
}

async function extractSecretsForWallet(wallet: OrangeWallet) {
  const allKeys = await keychain.loadAllKeys();
  if (!allKeys) throw new Error(CLOUD_BACKUP_ERRORS.KEYCHAIN_ACCESS_ERROR);
  const secrets = {} as {[key: string]: string};

  const allowedPkeysKeys = map(
    wallet?.addresses,
    account => `${account.address}_${privateKeyKey}`,
  );

  allKeys.forEach(item => {
    // Ignore allWalletsKey
    if (item.username === allWalletsKey) {
      return;
    }

    // Ignore selected wallet
    if (item.username === selectedWalletKey) {
      return;
    }

    // Ignore another wallets seeds
    if (
      item.username.indexOf(`_${seedPhraseKey}`) !== -1 &&
      item.username !== `${wallet.id}_${seedPhraseKey}`
    ) {
      return;
    }

    // Ignore other wallets PKeys
    if (
      item.username.indexOf(`_${privateKeyKey}`) !== -1 &&
      allowedPkeysKeys.indexOf(item.username) === -1
    ) {
      return;
    }

    secrets[item.username] = item.password;
  });
  return secrets;
}

export async function backupWalletToCloud(
  password: BackupPassword,
  wallet: OrangeWallet,
) {
  const now = Date.now();

  const secrets = await extractSecretsForWallet(wallet);
  const data = {
    createdAt: now,
    secrets,
  };
  return encryptAndSaveDataToCloud(data, password, `backup_${now}.json`);
}

export async function addWalletToCloudBackup(
  password: BackupPassword,
  wallet: OrangeWallet,
  filename: string,
): Promise<null | boolean> {
  // @ts-ignore
  const backup = await getDataFromCloud(password, filename);

  const now = Date.now();

  const secrets = await extractSecretsForWallet(wallet);

  backup.updatedAt = now;
  // Merge existing secrets with the ones from this wallet
  backup.secrets = {
    ...backup.secrets,
    ...secrets,
  };
  return encryptAndSaveDataToCloud(backup, password, filename);
}

export function findLatestBackUp(wallets: AllOrangeWallets): string | null {
  let latestBackup: string | null = null;
  let filename: string | null = null;

  forEach(wallets, wallet => {
    // Check if there's a wallet backed up
    if (
      wallet.backedUp &&
      wallet.backupDate &&
      wallet.backupFile &&
      wallet.backupType === WalletBackupTypes.cloud
    ) {
      // If there is one, let's grab the latest backup
      if (!latestBackup || wallet.backupDate > latestBackup) {
        filename = wallet.backupFile;
        latestBackup = wallet.backupDate;
      }
    }
  });

  return filename;
}

export async function restoreCloudBackup(
  password: BackupPassword,
  userData: BackupUserData | null,
  backupSelected: string | null,
): Promise<boolean> {
  // We support two flows
  // Restoring from the welcome screen, which uses the userData to rebuild the wallet
  // Restoring a specific backup from settings => Backup, which uses only the keys stored.

  try {
    const filename =
      backupSelected || (userData && findLatestBackUp(userData?.wallets));
    if (!filename) {
      return false;
    }
    // 2- download that backup
    // @ts-ignore
    const data = await getDataFromCloud(password, filename);
    if (!data) {
      throw new Error('Invalid password');
    }
    let dataToRestore = {
      ...data.secrets,
    };

    if (userData) {
      // Restore only wallets that were backed up in cloud
      // or wallets that are read-only
      const walletsToRestore: AllOrangeWallets = {};
      forEach(userData.wallets, wallet => {
        if (
          wallet.backedUp &&
          wallet.backupDate &&
          wallet.backupFile &&
          wallet.backupType === WalletBackupTypes.cloud
        ) {
          walletsToRestore[wallet.id] = wallet;
        }
      });

      // All wallets
      dataToRestore[allWalletsKey] = {
        version: allWalletsVersion,
        wallets: walletsToRestore,
      };
      return restoreCurrentBackupIntoKeychain(dataToRestore);
    } else {
      return restoreSpecificBackupIntoKeychain(dataToRestore);
    }
  } catch (e) {
    logger.sentry('Error while restoring back up');

    return false;
  }
}

async function restoreSpecificBackupIntoKeychain(
  backedUpData: BackedUpData,
): Promise<boolean> {
  try {
    // Re-import all the seeds (and / or pkeys) one by one
    for (const key of Object.keys(backedUpData)) {
      if (endsWith(key, seedPhraseKey)) {
        const valueStr = backedUpData[key];
        const {seedphrase} = JSON.parse(valueStr);
        await createWallet(seedphrase, null, null, true);
      }
    }
    return true;
  } catch (e) {
    logger.sentry('error in restoreSpecificBackupIntoKeychain');

    return false;
  }
}

async function restoreCurrentBackupIntoKeychain(
  backedUpData: BackedUpData,
): Promise<boolean> {
  try {
    // Access control config per each type of key
    const privateAccessControlOptions =
      await keychain.getPrivateAccessControlOptions();

    await Promise.all(
      Object.keys(backedUpData).map(async key => {
        const value = backedUpData[key];
        let accessControl: Options = keychain.publicAccessControlOptions;
        if (endsWith(key, seedPhraseKey) || endsWith(key, privateKeyKey)) {
          accessControl = privateAccessControlOptions;
        }
        if (typeof value === 'string') {
          return keychain.saveString(key, value, accessControl);
        } else {
          return keychain.saveObject(key, value, accessControl);
        }
      }),
    );

    return true;
  } catch (e) {
    logger.sentry('error in restoreBackupIntoKeychain');

    return false;
  }
}

// Attempts to save the password to decrypt the backup from the iCloud keychain
export async function saveBackupPassword(
  password: BackupPassword,
): Promise<void> {
  try {
    if (Platform.OS == 'ios') {
      await setSharedWebCredentials('myorange.me', 'Backup Password', password);
      logger.sentry("Didn't save backup password on iCloud");
    }
  } catch (e) {
    logger.sentry("Didn't save backup password on iCloud");
  }
}

// Attempts to fetch the password to decrypt the backup from the iCloud keychain
export async function fetchBackupPassword(): Promise<null | BackupPassword> {
  if (Platform.OS == 'android') {
    return null;
  }

  try {
    const results = await requestSharedWebCredentials();
    if (results) {
      return results.password as BackupPassword;
    }
    return null;
  } catch (e) {
    logger.sentry('Error while fetching backup password', e);

    return null;
  }
}
