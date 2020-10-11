import express, { Response, Request } from 'express';



const router = express.Router();

router.post('/api/payment', async (req: Request, res: Response) => {
  console.log('New payment');
});

export { router as newPaymentRouter };