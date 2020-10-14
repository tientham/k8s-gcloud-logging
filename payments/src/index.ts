import { app, logger } from "./app";


const start = async () => {
  logger.info('[Payment MicroService] Starting...');

  logger.info('[Payment MicroService] Connected');

  app.listen(3001, () => {
    logger.info('[Payment MicroService] - Listen on port 3000');
  });
};

start();