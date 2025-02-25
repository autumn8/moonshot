import { AppDataSource } from './data-source';
import { User } from './entity/User';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { Token } from './entity/Token';
import { authenticateApiKey } from './middleware/authenticate-api-key';

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

AppDataSource.initialize()
  .then(async () => {
    const tokenRepository = AppDataSource.getRepository(Token);

    app.get(
      '/tokens',
      authenticateApiKey,
      async (req: Request, res: Response) => {
        const tokens = await tokenRepository.find();
        try {
          const tokens = await tokenRepository.find();
          res.status(200).json(tokens);
        } catch {
          res.status(500).json({ message: 'Error retrieving tokens' });
        }
      }
    );

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
