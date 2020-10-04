import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import ora from 'ora';
import { errors } from 'celebrate';
import 'express-async-errors';
import AppError from '@shared/errors/AppError';
import winston from 'winston';
import expressWinston from 'express-winston';
import routes from './routes';

import '@shared/infra/typeorm';

const app = express();

app.use(
  expressWinston.logger({
    transports: [new winston.transports.File({ filename: 'access.log' })],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
    ),
    meta: true,
    msg:
      'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
    expressFormat: true,
    colorize: false,
  }),
);

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  ora('Server started on port 3333!').succeed();
});
