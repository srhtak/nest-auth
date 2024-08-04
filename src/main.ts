import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // express-session middleware'ini kullan
  app.use(
    session({
      secret: 'serhat',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
