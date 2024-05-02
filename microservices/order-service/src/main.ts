import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { microserviceOptions } from './config/grpc.options';

const logger = new Logger('Order Service');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderModule,
    microserviceOptions,
  );
  await app.listen();
  logger.log('Order service listening all requests');
}
bootstrap();
