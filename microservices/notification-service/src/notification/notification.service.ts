import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { EmaiLData } from './interfaces/email.interface';

@Injectable()
export class NotificationService {
  constructor(
    @InjectQueue('email-notification')
    private readonly emailQueue: Queue,
  ) {}

  async addNewMail(data: EmaiLData): Promise<void> {
    await this.emailQueue.add(data);
  }
}
