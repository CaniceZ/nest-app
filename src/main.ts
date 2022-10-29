import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 白名单
      transform: true, // 自动转换一些参数类型
      forbidNonWhitelisted: true, // 是否允许多余属性
    }),
  );
  await app.listen(3000);
}
bootstrap();
