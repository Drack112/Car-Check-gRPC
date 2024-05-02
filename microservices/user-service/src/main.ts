import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { microserviceOptions } from './config/grpc.options';

const logger = new Logger('User service');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    microserviceOptions,
  );
  await app.listen();
  logger.log('User service listening for requests');
}
bootstrap();
