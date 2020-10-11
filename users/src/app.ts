import express from 'express';
import { json } from 'body-parser';
import { newUserRouter } from './routes/new';


const app = express();
app.use(json());

app.use(newUserRouter);

app.all('*', async (req, res) => {
  console.log('Hello');
});

export {app};