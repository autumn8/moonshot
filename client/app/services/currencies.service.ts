import { Currency, MoonError } from './currencies.types';

type CurrencyApiResponse =
  | {
      success: true;
      data: Currency[];
    }
  | {
      success: false;
      error: MoonError;
    };

export const fetchCurrencies = async (): Promise<CurrencyApiResponse> => {
  try {
    const response = await fetch('https://api.moonpay.com/v3/currencies');
    if (response.status != 200) throw new Error('Http error');
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        message: error?.toString() ?? 'Http Error',
      },
    };
  }
};
