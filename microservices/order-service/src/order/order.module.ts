import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import {
  carServiceOptions,
  emailServiceOptions,
  userServiceOptions,
  walletServiceOptions,
} from '../config/grpc.options';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../config/env';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order, OrderSchema } from './schema/order.schema';

@Module({
  imports: [
    ClientsModule.register([
      emailServiceOptions,
      carServiceOptions,
      userServiceOptions,
      walletServiceOptions,
    ]),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
