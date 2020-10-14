import { app, logger } from "./app";
const axios = require("axios");

const start = async () => {
  logger.info('[User MicroService] Starting...');

  logger.info('[User MicroService] Connected');

  app.listen(3002, async () => {
    logger.info('[User MicroService] - Listen on port 3000');
    await axios.get("http://test-logging-payment-service:3001/api/payment");
  });
};

start();