import express from 'express';
import { json } from 'body-parser';
import { newPaymentRouter } from './routes/new';
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

app.use(newPaymentRouter);
logger.info('[Payment MicroService] started!');

app.all('*', async (req, res) => {
  console.log('Hello');
});

export {app};