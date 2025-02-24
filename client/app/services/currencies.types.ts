export type Currency = {
  id: string;
  type: string;
  name: string;
  code: string;
  icon: string;
  metadata: {
    networkCode: string;
  };
};

export type MoonError = {
  message: string;
};

export type CurrencyType = 'fiat' | 'crypto';
