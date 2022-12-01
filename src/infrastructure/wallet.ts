/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * 1. Implement generateMneomic() function; - Function should call SDK to generate 12 word mnemonic
 * 2. Implement createWallet() function; - Function should create wallet using mnemonic on several chains and store in keychain
 * 3. Implement backWalletToCloud() function; - Function should backup encrypted seed phrase to cloud(google drive or icloud
 * 4. Implement restoreWalletWithSeedPhrase() function; - Function should create same set of wallets using seed phrase
 * 5. Implement restoreWalletFromCloud() function; - Function should let users restore wallet from cloud
 * 6. Implement getSeedPhraseFromKeyChain() function; - Function should return seedphrase associated to the account
 * 7. Implement getPrivateKeyByAddress() function; - Function should return privateKey associated to an address
 * 8. Implement sendTransaction() function; - Function should send a transcation
 * 9. Implement approveTransaction() function; - Function should approve a transaction
 *
 */
import multichainWallet from 'multichain-crypto-wallet';
import {NetworkTypes, OrangeAccount, OrangeWallet} from '@libs/constants';
import {savePIN, getExistingPIN} from './authentication';
import AesEncryptor from '@helpers/encryption';

const encryptor = new AesEncryptor();

export const allWalletsVersion = 1.0;
export const DEFAULT_WALLET_NAME = 'My Wallet';

export const generateMnemonic = () => {
  // @ts-ignore
  console.log('gets here');
  const seed = multichainWallet.generateMnemonic();
  console.log(seed, 'seed from generating wallet');
  return seed;
};

// this function will also serve as the restoreWalletWithSeedPhrase() function
export const createWallet = async (
  seed: null | string = null,
  name: null | string = null,
  userPin: null | string = null,
) => {
  //check if wallet is imported
  const isImported = !!seed;

  let addresses: OrangeAccount[] = [];
  let wallet: OrangeWallet;
  try {
    // store address on the addresseses array
    // create wallets on different chains and update the wallet object
    // save encrypted private key on keychain -- encrypt with  pin
    // save encrypted seed on keychain -- encrypt with  pin
    // save wallet object on keychain
    //

    // this wallet supports all evm compatible blockchain
    /**
     * This can be better improved
     */
    const ethereumWallet = await multichainWallet.createWallet({
      network: NetworkTypes.ethereum_mainnet,
    });
    addresses.push({
      index: 0,
      network: NetworkTypes.ethereum_mainnet,
      address: ethereumWallet.address,
    });
    // solana wallet
    const solanaWallet = await multichainWallet.createWallet({
      network: NetworkTypes.solana_mainnet,
    });
    addresses.push({
      index: 0,
      network: NetworkTypes.solana_mainnet,
      address: solanaWallet.address,
    });
    // bitcoin wallet
    const bitcoinWallet = await multichainWallet.createWallet({
      network: NetworkTypes.bitcoin,
    });
    addresses.push({
      index: 0,
      network: NetworkTypes.bitcoin,
      address: bitcoinWallet.address,
    });
  } catch {}
};
