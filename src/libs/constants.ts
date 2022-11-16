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
} as const;

export interface OrangeAccount {
  index: number;
  network: NetworkTypes;
  address: string;
}

export interface RainbowWallet {
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

// key chain constants
export const seedPhraseKey = 'orangeSeedPhrase';
export const privateKeyKey = 'orangePrivateKey';
export const addressKey = 'orangeAddressKey';
export const selectedWalletKey = 'orangeSelectedWalletKey';
export const allWalletsKey = 'orangeAllWalletsKey';
export const oldSeedPhraseMigratedKey = 'orangeOldSeedPhraseMigratedKey';
export const pinKey = 'orangePinKey';
