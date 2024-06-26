import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userServiceOptions } from '../config/grpc.options';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([userServiceOptions]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
