import { ClientOptions, GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import config from './env';

interface ServiceOptions extends GrpcOptions {
  name: string;
}

export const walletServiceOptions: ServiceOptions = {
  name: 'WALLET_PACKAGE',
  transport: Transport.GRPC,
  options: {
    package: 'wallet',
    protoPath: join(__dirname, '../../../../proto/wallet.proto'),
    url: config()['WALLET_SERVICE_URL'],
  },
};

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'order',
    protoPath: join(__dirname, '../../../../proto/order.proto'),
    url: `0.0.0.0:${config()['PORT']}`,
  },
};

export const emailServiceOptions: ServiceOptions = {
  name: 'EMAIL_PACKAGE',
  transport: Transport.GRPC,
  options: {
    package: 'email',
    protoPath: join(__dirname, '../../../../proto/email.proto'),
    url: config()['EMAIL_SERVICE_URL'],
  },
};

export const carServiceOptions: ServiceOptions = {
  name: 'CAR_PACKAGE',
  transport: Transport.GRPC,
  options: {
    package: 'car',
    protoPath: join(__dirname, '../../../../proto/car.proto'),
    url: config()['CAR_SERVICE_URL'],
  },
};

export const userServiceOptions: ServiceOptions = {
  name: 'USER_PACKAGE',
  transport: Transport.GRPC,
  options: {
    package: 'user',
    protoPath: join(__dirname, '../../../../proto/user.proto'),
    url: config()['USER_SERVICE_URL'],
  },
};
