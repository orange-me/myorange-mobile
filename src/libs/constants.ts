export enum CurrencyTypes {
  usd = 'usd',
  ngn = 'ngn',
  kes = 'kes',
}
export enum NetworkTypes {
  arbitrum = 'arbitrum',
  goerli = 'goerli',
  kovan = 'kovan',
  ethereum_mainnet = 'ethereum',
  binance_mainnet = 'binance',
  binance_testnet = 'binance_testnet',
  bitcoin = 'bitcoin',
  solana_mainnet = 'solana',
  solana_testnet = 'solana_testnet',
  optimism = 'optimism',
  polygon = 'polygon',
  rinkeby = 'rinkeby',
  ropsten = 'ropsten',
}

export default {
  arbitrum: 'arbitrum',
  goerli: 'goerli',
  kovan: 'kovan',
  ethereum_mainnet: 'ethereum',
  binance_mainnet: 'binance',
  binance_testnet: 'binance_testnet',
  bitcoin: 'bitcoin',
  solana_mainnet: 'solana',
  solana_testnet: 'solana_testnet',
  optimism: 'optimism',
  polygon: 'polygon',
  rinkeby: 'rinkeby',
  ropsten: 'ropsten',
  cloud: 'cloud',
  manual: 'manual',
} as const;

export interface OrangeAccount {
  index: number;
  network: NetworkTypes;
  address: string;
}
export enum WalletBackupTypes {
  cloud = 'cloud',
  manual = 'manual',
}
export interface OrangeWallet {
  addresses: OrangeAccount[];
  id: string;
  imported: boolean;
  name: string;
  primary: boolean;
  image: string;
  backedUp: boolean;
  backupFile?: string;
  backupDate?: string;
  backupType?: string;
}
export interface AllOrangeWallets {
  [key: string]: OrangeWallet;
}
// keychain constants
export const seedPhraseKey = 'orangeSeedPhrase';
export const privateKeyKey = 'orangePrivateKey';
export const addressKey = 'orangeAddressKey';
export const selectedWalletKey = 'orangeSelectedWalletKey';
export const allWalletsKey = 'orangeAllWalletsKey';
export const pinKey = 'orangePinKey';
