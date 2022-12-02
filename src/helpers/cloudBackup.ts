import {sortBy} from 'lodash';
import { Platform } from 'react-native';
import RNCloudFs from 'react-native-cloud-fs';
import { ORANGE_MASTER_KEY } from 'react-native-dotenv';
import RNFS from 'react-native-fs';
import AesEncryptor from './encryption';
import { logger } from '../utils';

// @Joe, please advice on this backup wallet directory.
const REMOTE_BACKUP_WALLET_DIR = '';
const USERDATA_FILE = 'UserData.json';
const encryptor = new AesEncryptor();

export const CLOUD_BACKUP_ERRORS = {
  ERROR_DECRYPTING_DATA: 'Error decrypting data',
  ERROR_GETTING_ENCRYPTED_DATA: 'Error getting encrypted data!',
  GENERAL_ERROR: 'Backup failed',
  INTEGRITY_CHECK_FAILED: 'Backup integrity check failed',
  KEYCHAIN_ACCESS_ERROR: `Couldn't read items from keychain`,
  NO_BACKUPS_FOUND: 'No backups found',
  SPECIFIC_BACKUP_NOT_FOUND: 'No backup found with that name',
  UKNOWN_ERROR: 'Unknown Error',
  WALLET_BACKUP_STATUS_UPDATE_FAILED: 'Update wallet backup status failed',
};
/**
 * TODO
 * 1.  function to logout from google drive
 * // function to save all backups
// function to encrypt and save data to cloud
// function to get data from cloud
// function to check if cloud backup wallet is available
 */

export function logoutFromGoogleDrive() {
  Platform.OS == 'android' && RNCloudFs.logout();
}

// This is used for dev purposes only!
export async function deleteAllBackups() {
  if (Platform.OS == 'android') {
    await RNCloudFs.loginIfNeeded();
  }
  const backups = await RNCloudFs.listFiles({
    scope: 'hidden',
    targetPath: REMOTE_BACKUP_WALLET_DIR,
  });
  await Promise.all(
    backups.files.map(async (file: any) => {
      await RNCloudFs.deleteFromCloud(file);
    }),
  );
}

export async function fetchAllBackups() {
  if (Platform.OS == 'android') {
    await RNCloudFs.loginIfNeeded();
  }
  return RNCloudFs.listFiles({
    scope: 'hidden',
    targetPath: REMOTE_BACKUP_WALLET_DIR,
  });
}
export async function encryptAndSaveDataToCloud(
  data: any,
  password: any,
  filename: any,
) {
  // Encrypt the data
  try {
    const encryptedData = await encryptor.encrypt(
      password,
      JSON.stringify(data),
    );
    // Store it on the FS first
    const path = `${RNFS.DocumentDirectoryPath}/${filename}`;
    await RNFS.writeFile(path, encryptedData, 'utf8');
    const sourceUri = {path};
    const destinationPath = `${REMOTE_BACKUP_WALLET_DIR}/${filename}`;
    const mimeType = 'application/json';
    // Only available to our app
    const scope = 'hidden';
    if (Platform.OS === 'android') {
      await RNCloudFs.loginIfNeeded();
    }
    const result = await RNCloudFs.copyToCloud({
      mimeType,
      scope,
      sourcePath: sourceUri,
      targetPath: destinationPath,
    });
    console.log(result, 'result from data backup');
    // Now we need to verify the file has been stored in the cloud
    const exists = await RNCloudFs.fileExists(
      Platform.OS === 'ios'
        ? {
            scope,
            targetPath: destinationPath,
          }
        : {
            fileId: result,
            scope,
          },
    );

    if (!exists) {
      logger.sentry('Backup doesnt exist after completion');
      throw new Error(CLOUD_BACKUP_ERRORS.INTEGRITY_CHECK_FAILED);
    }

    await RNFS.unlink(path);
    return filename;
  } catch (e) {
    logger.sentry('Error during encryptAndSaveDataToCloud', e);

    throw new Error(CLOUD_BACKUP_ERRORS.GENERAL_ERROR);
  }
}

function getICloudDocument(filename: any) {
  return RNCloudFs.getIcloudDocument(filename);
}

function getGoogleDriveDocument(id: any) {
  return RNCloudFs.getGoogleDriveDocument(id);
}

export function syncCloud() {
  if ((Platform.OS = 'ios')) {
    return RNCloudFs.syncCloud();
  }
  return true;
}

export async function getDataFromCloud(backupPassword: any, filename = null) {
  if (Platform.OS == 'android') {
    await RNCloudFs.loginIfNeeded();
  }

  const backups = await RNCloudFs.listFiles({
    scope: 'hidden',
    targetPath: REMOTE_BACKUP_WALLET_DIR,
  });

  if (!backups || !backups.files || !backups.files.length) {
    logger.sentry('No backups found');
    const error = new Error(CLOUD_BACKUP_ERRORS.NO_BACKUPS_FOUND);

    throw error;
  }

  let document;
  if (filename) {
    if ((Platform.OS = 'ios')) {
      // .icloud are files that were not yet synced
      document = backups.files.find(
        (file: any) =>
          file.name === filename || file.name === `.${filename}.icloud`,
      );
    } else {
      document = backups.files.find((file: any) => {
        return file.name === `${REMOTE_BACKUP_WALLET_DIR}/${filename}`;
      });
    }

    if (!document) {
      logger.sentry('No backup found with that name!', filename);
      const error = new Error(CLOUD_BACKUP_ERRORS.SPECIFIC_BACKUP_NOT_FOUND);

      throw error;
    }
  } else {
    const sortedBackups = sortBy(backups.files, 'lastModified').reverse();
    document = sortedBackups[0];
  }
  const encryptedData = (Platform.OS = 'ios'
    ? await getICloudDocument(filename)
    : await getGoogleDriveDocument(document.id));

  if (encryptedData) {
    logger.sentry('Got cloud document ', filename);
    const backedUpDataStringified = await encryptor.decrypt(
      backupPassword,
      encryptedData,
    );
    if (backedUpDataStringified) {
      const backedUpData = JSON.parse(backedUpDataStringified);
      return backedUpData;
    } else {
      logger.sentry('We couldnt decrypt the data');
      const error = new Error(CLOUD_BACKUP_ERRORS.ERROR_DECRYPTING_DATA);

      throw error;
    }
  }
  logger.sentry('We couldnt get the encrypted data');
  const error = new Error(CLOUD_BACKUP_ERRORS.ERROR_GETTING_ENCRYPTED_DATA);

  throw error;
}

export async function backupUserDataIntoCloud(data: any) {
  const filename = USERDATA_FILE;
  const password = ORANGE_MASTER_KEY;
  return encryptAndSaveDataToCloud(data, password, filename);
}

export async function fetchUserDataFromCloud() {
  const filename = USERDATA_FILE;
  const password = ORANGE_MASTER_KEY;
  return getDataFromCloud(password, filename);
}

export const cloudBackupPasswordMinLength = 8;

export function isCloudBackupPasswordValid(password: any) {
  return !!(
    password &&
    password !== '' &&
    password.length >= cloudBackupPasswordMinLength
  );
}

export function isCloudBackupAvailable() {
  if ((Platform.OS = 'ios')) {
    return RNCloudFs.isAvailable();
  }
  return true;
}
