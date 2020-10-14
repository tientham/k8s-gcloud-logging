import express from 'express';
import { json } from 'body-parser';
import { newPaymentRouter } from './routes/new';
import { getPaymentRouter } from './routes/getPayments';
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
app.use(getPaymentRouter);

logger.info('Ver1.0');
logger.info('[Payment MicroService] started!');


app.all('*', async (req, res) => {
  console.log('Hello');
  logger.info('[Payment MicroService] Hello received!');
});

export {app, logger};