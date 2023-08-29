// проверка, что добавленная переменная окружения не в режиме разработки
if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
console.log(
  'process.env.IS_TS_NODE (true - не прод!!!):',
  process.env.IS_TS_NODE,
);
