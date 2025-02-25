import { AppDataSource } from './data-source';
import { User } from './entity/User';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { Token } from './entity/Token';
import { authenticateApiKey } from './middleware/authenticate-api-key';
import fetch from 'node-fetch';

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

const getPriceDataForTokens = async (tokens: Token[]) => {
  const tokenCodes = tokens.map(({ code }) => code.split('_')[0]).join(',');
  console.log(tokenCodes);
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${tokenCodes}e&vs_currencies=zar&include_24hr_change=true`
  );
  const data = await response.json();
  console.log(data);
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
          //const tokensWithPriceData = await getPriceDataForTokens(tokens);
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
