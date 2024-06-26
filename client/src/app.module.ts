import { Module } from '@nestjs/common';
import { AuthModule } from './services/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { WalletModule } from './services/wallet/wallet.module';
import { UserModule } from './services/user/user.module';
import { CarModule } from './services/car/car.module';
import { OrderModule } from './services/order/order.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    WalletModule,
    UserModule,
    CarModule,
    OrderModule,
  ],
})
export class AppModule {}
