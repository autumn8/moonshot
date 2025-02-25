import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

export const authenticateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers.authorization;

  if (!apiKey) {
    res.status(401).json({ message: 'Api key not provided' });
  }

  const [bearer, key] = apiKey.split(' ');
  if (bearer !== 'Bearer' || key !== process.env.API_KEY) {
    res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};
