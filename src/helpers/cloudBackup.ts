import {sortBy} from 'lodash';
import {Platform} from 'react-native';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import RNCloudFs from 'react-native-cloud-fs';
// @ts-expect-error ts-migrate(2305) FIXME: Module '"react-native-dotenv"' has no exported mem... Remove this comment to see the full error message
import {ORANGE_MASTER_KEY} from 'react-native-dotenv';
import RNFS from 'react-native-fs';
import AesEncryptor from '../handlers/aesEncryption';
import {logger} from '../utils';

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
  Platform.Os == 'android' && RNCloudFs.logout();
}

// This is used for dev purposes only!
export async function deleteAllBackups() {
  if (Platform.Os == 'android') {
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
  if (Platform.Os == 'android') {
    await RNCloudFs.loginIfNeeded();
  }
  return RNCloudFs.listFiles({
    scope: 'hidden',
    targetPath: REMOTE_BACKUP_WALLET_DIR,
  });
}
