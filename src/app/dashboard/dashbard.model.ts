export interface Number {
  id: number;
}

export interface Name {
  name: string;
  symbol: string;
}

export interface Crypto {
  price: string;
  change: string;
  marketCap: string;
  supply: string;
  progress: string;
  nextUnlock: string;
  nextUnlockDate: string;
}

export interface CryptoDetail {
  number: Number;
  name: Name;
  details: Crypto;
}
