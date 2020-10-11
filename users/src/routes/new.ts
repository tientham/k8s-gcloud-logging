import express, { Response, Request } from 'express';



const router = express.Router();

router.post('/api/user', async (req: Request, res: Response) => {
  console.log('New user');
});

export { router as newUserRouter };