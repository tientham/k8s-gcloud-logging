import express from 'express';
import { json } from 'body-parser';
import { newPaymentRouter } from './routes/new';


const app = express();
app.use(json());

app.use(newPaymentRouter);

app.all('*', async (req, res) => {
  console.log('Hello');
});

export {app};