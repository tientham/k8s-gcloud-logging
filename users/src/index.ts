import { app } from "./app";


const start = async () => {
  console.log('[User MicroService] Starting...');

  console.log('[User MicroService] Connected');

  app.listen(3002, () => {
    console.log('[User MicroService] - Listen on port 3000');
  });
};

start();