import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use((req, res, next) => {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   //return res.status(200).json({});

  // });
  app.enableCors({

    origin: 'http://localhost:3001/'

  });
  await app.listen(3000);
}
bootstrap();


