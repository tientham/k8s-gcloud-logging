import express, { Response, Request } from 'express';
import { logger } from '../app';

const router = express.Router();

router.get('/api/payment', async (req: Request, res: Response) => {
  logger.info('Get payment');
});

export { router as getPaymentRouter };