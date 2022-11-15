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
  backedUp: boolean;
  backupFile?: string;
  backupDate?: string;
  backupType?: string;
}
