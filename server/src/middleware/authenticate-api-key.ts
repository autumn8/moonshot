import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';

export const authenticateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers.authorization;

  if (!apiKey) return res.status(403).json({ message: 'Api key is missing' });

  const [bearer, key] = apiKey.split(' ');
  if (bearer !== 'Bearer' || key !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  next();
};
