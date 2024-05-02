import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { NotificationModule } from './notification/notification.module';
import { microserviceOptions } from './config/grpc.options';

const logger = new Logger('Notification Service');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationModule,
    microserviceOptions,
  );

  await app.listen();
  logger.log('Notification service listening from requests');
}
bootstrap();
