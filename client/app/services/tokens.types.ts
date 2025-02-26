export type Token = {
  id: string;
  type: string;
  name: string;
  code: string;
  icon: string;
  networkCode: string;
  price: number;
  twentyFourHourChange: number;
};

export type MoonError = {
  message: string;
};
