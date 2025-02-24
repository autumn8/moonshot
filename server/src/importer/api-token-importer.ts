/* 
  This grabs existing data from the moonpay api, filters, maps and augments the data 
  and writes it to the moonshot db token table
  */

import fetch from 'node-fetch';

import { AppDataSource } from '../data-source';
import { User } from '../entity/User';

const CURRENCIES_URL = 'https://api.moonpay.com/v3/currencies';

type Token = {
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

AppDataSource.initialize()
  .then(async () => {
    console.log(`Pulling data from ${CURRENCIES_URL}`);

    const response = await fetch(CURRENCIES_URL);
    if (response.status != 200) {
      console.error('Error loading currency data from moonpay api');
      return;
    }
    const data = (await response.json()) as Token[];
    const tokens = data
      .slice(0, 30) //grab first 30
      .filter((currency) => currency.type === 'crypto') //only crypto, no fiat.
      .map((currency) => {
        //optimize for client
        return {
          id: currency.id,
          name: currency.name,
          code: currency.code,
          icon: currency.icon,
          metadata: currency.metadata,
          supportsTestMode: currency.supportsTestMode,
          supportsLiveMode: currency.supportsLiveMode,
        };
      });

    // const user = new User();
    // user.firstName = 'Timber';
    // user.lastName = 'Saw';
    // user.age = 25;
    // await AppDataSource.manager.save(user);
    // console.log('Saved a new user with id: ' + user.id);

    // console.log('Loading users from the database...');
    // const users = await AppDataSource.manager.find(User);
    // console.log('Loaded users: ', users);

    // console.log(
    //   'Here you can setup and run express / fastify / any other framework.'
    // );
  })
  .catch((error) => console.log(error));
