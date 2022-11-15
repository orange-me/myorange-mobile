import {captureException} from '@sentry/react-native';
import {ORANGE_MASTER_KEY} from 'react-native-dotenv';
import AesEncryptor from '@helpers/encryption';
import {pinKey} from '@constants/keyChainConstants';
import * as keychain from '../infrastructure/keychain';
import logger from '@helpers/loggers';

const encryptor = new AesEncryptor();

// returns the User's PIN
export async function getExistingPIN() {
  try {
    const encryptedPin = await keychain.loadString(pinKey);
    // The user has a PIN already, we need to decrypt it
    if (encryptedPin) {
      const userPIN = await encryptor.decrypt(ORANGE_MASTER_KEY, encryptedPin);
      return userPIN;
    }
  } catch (e) {}
  return null;
}

export async function savePIN(pin: any) {
  try {
    const encryptedPin = await encryptor.encrypt(ORANGE_MASTER_KEY, pin);
    if (encryptedPin) {
      await keychain.saveString(pinKey, encryptedPin);
    }
  } catch (e) {
    logger.sentry('Error saving pin');
    captureException(e);
  }
}
