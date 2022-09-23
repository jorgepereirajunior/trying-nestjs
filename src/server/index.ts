import { NestFactory } from '@nestjs/core';

import { Modules } from '../modules';

async function bootstrap() {
  const app = await NestFactory.create(Modules);

  return app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

const server = { bootstrap };

export default server;
