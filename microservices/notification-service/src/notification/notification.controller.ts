import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';

import { Empty, NoticeData } from '../../../../proto/build/email';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @GrpcMethod('NotificationService', 'NotifyPurchase')
  async notifyPurchase(data: NoticeData, _metadata: Metadata): Promise<Empty> {
    await this.notificationService.addNewMail({
      email: data.email,
      vin: data.vin,
      carModel: data.carModel,
      make: data.make,
      firstName: data.firstName,
    });
    return {};
  }
}
