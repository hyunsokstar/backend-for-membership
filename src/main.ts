import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthMiddleware } from './auth/middlewares/auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9090);
}

bootstrap();
