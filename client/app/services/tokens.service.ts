import { Token, MoonError } from './tokens.types';

type TokensApiResponse =
  | {
      success: true;
      data: Token[];
    }
  | {
      success: false;
      error: MoonError;
    };

export const fetchTokens = async (): Promise<TokensApiResponse> => {
  try {
    const response = await fetch('http://192.168.1.183:3000/tokens', {
      headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
      },
    });
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
