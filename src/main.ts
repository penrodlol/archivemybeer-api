import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());

  await app
    .listen(4123)
    .then(() => 
      console.log(`
      ✅ API Start Success!
        GQL PLAYGROUND: http://localhost:4123/archivemybeer
      `)
    )
    .catch(error => console.log(`❌ API Start Failure: ${error}`));
}
bootstrap();
