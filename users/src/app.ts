import express from 'express';
import { json } from 'body-parser';
import { newUserRouter } from './routes/new';

const winston = require('winston');
const {LoggingWinston} = require('@google-cloud/logging-winston');

const loggingWinston = new LoggingWinston();

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    loggingWinston
  ]
});

const app = express();
app.use(json());

app.use(newUserRouter);
logger.info('[User MicroService] started!');


app.all('*', async (req, res) => {
  logger.info('Hello');
});

export {app, logger};