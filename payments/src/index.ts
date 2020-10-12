import { app } from "./app";


const start = async () => {
  console.log('[Payment MicroService] Starting...');

  console.log('[Payment MicroService] Connected');

  app.listen(3001, () => {
    console.log('[Payment MicroService] - Listen on port 3000');
  });
};

start();