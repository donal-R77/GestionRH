import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration CORS pour autoriser le frontend Angular
  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
    credentials: true,
  });

  // Préfixe global des routes API : /api/v1/...
  app.setGlobalPrefix('api');

  // Validation automatique des requêtes entrantes avec class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  Logger.log(`🚀 TV Oasis RH Backend démarré sur http://localhost:${port}/api`, 'Bootstrap');
}

await bootstrap();
