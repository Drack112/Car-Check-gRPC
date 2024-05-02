import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import config from './env';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'email',
    protoPath: join(__dirname, '../../../../proto/email.proto'),
    url: `0.0.0.0:${config()['PORT']}`,
  },
};
