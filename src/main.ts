import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const port = 3000 || 4200;
  await app.listen(port);
  // await app.listen(3000);
}
bootstrap();
