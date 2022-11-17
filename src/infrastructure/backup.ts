import {endsWith, forEach, map} from 'lodash';
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

/**
 *  Todo - 1. Back up wallet to cloud
 *  Todo - 2. add wallet to cloud backup
 *  Todo - 3. should find the latest back up
 *  Todo - 4. should restore wallet from cloud
 * Todo - 5. should store backup password to keychain
 * */
