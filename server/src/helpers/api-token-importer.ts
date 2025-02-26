/*

  **Moonpay currencies importer** 

  This importer grabs existing data from the moonpay api, filters, maps 
  and augments the data before writing to moonshot db, token table

 */

import fetch from 'node-fetch';
import { AppDataSource } from '../data-source';
import { Token } from '../entity/Token';
import '../utils/array-utils';
import { tokenPriceRequestIds } from '../tokenPriceRequestIds';

const CURRENCIES_URL = 'https://api.moonpay.com/v3/currencies';

type TokenType = {
  id: string;
  type: string;
  name: string;
  code: string;
  icon: string;
  metadata: {
    networkCode: string;
  };
  supportsTestMode: boolean;
  supportsLiveMode: boolean;
};

const getCurrencyData = async (): Promise<TokenType[] | undefined> => {
  console.log(`Pulling data from ${CURRENCIES_URL}`);
  const response = await fetch(CURRENCIES_URL);
  if (response.status != 200) {
    console.error('Error loading currency data from moonpay api');
    return;
  }
  const data = (await response.json()) as TokenType[];
  return data;
};

AppDataSource.initialize()
  .then(async () => {
    const tokenRepository = AppDataSource.getRepository(Token);
    tokenRepository.clear();
    const data = await getCurrencyData();
    const allTokenProps = data
      .slice(0, 40)
      .filter((currency) => currency.type === 'crypto')
      .filter((token) => Object.keys(tokenPriceRequestIds).includes(token.code))
      .map((token) => ({
        id: token.id,
        name: token.name,
        code: token.code,
        icon: token.icon,
        networkCode: token.metadata.networkCode.split('_').join(' '),
        supportsTestMode: token.supportsTestMode,
        supportsLiveMode: token.supportsLiveMode,
      }))
      .forEachAsync(async (tokenProps) => {
        const token = Object.assign(new Token(), tokenProps);
        await tokenRepository.save(token);
        console.log('Saved token:' + token.code);
      });
  })
  .catch((error) => console.log(error));
