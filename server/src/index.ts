import { AppDataSource } from './data-source';
import { User } from './entity/User';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { Token } from './entity/Token';
import { authenticateApiKey } from './middleware/authenticate-api-key';
import fetch from 'node-fetch';
import { tokenPriceRequestIds } from './tokenPriceRequestIds';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

const getPriceDataForTokens = async (tokenCodes) => {
  const COINGECKO_PRICE_API_URL =
    'https://api.coingecko.com/api/v3/simple/price';
  const response = await fetch(
    `${COINGECKO_PRICE_API_URL}?ids=${tokenCodes}&vs_currencies=zar&include_24hr_change=true`
  );
  const data = await response.json();
  return data;
};

AppDataSource.initialize()
  .then(async () => {
    const tokenRepository = AppDataSource.getRepository(Token);

    app.get(
      '/tokens',
      authenticateApiKey,
      async (req: Request, res: Response) => {
        try {
          const tokens = await tokenRepository.find();
          const tokenPriceData = await getPriceDataForTokens(
            Object.values(tokenPriceRequestIds)
          );
          Object.entries(tokenPriceData).forEach(([key, value]) => {
            const token = tokens.find(
              (token) => tokenPriceRequestIds[token.code] === key
            );
            if (token) {
              token['price'] = value.zar;
              token['twentyFourHourChange'] = value.zar_24h_change;
            }
          });
          res.status(200).json(tokens);
        } catch (error) {
          res.status(500).json({ message: 'Error retrieving tokens' });
        }
      }
    );

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
