import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { NotificationConsumer } from './notification.consumer';
import configuration from '../config/env';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    BullModule.registerQueueAsync({
      name: 'email-notification',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: +configService.get('REDIS_PORT'),
        },
        defaultJobOptions: {
          delay: 300000,
          attempts: 5,
          backoff: {
            type: 'exponential',
            delay: 60000,
          },
          removeOnComplete: true,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationConsumer],
})
export class NotificationModule {}
