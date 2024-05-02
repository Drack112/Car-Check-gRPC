/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { compare, genSaltSync, hashSync } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { IPayload } from './interfaces/auth';
import { promisify } from '../utils/proxy';
import {
  IsValid,
  NewUser,
  UserData,
  UserResponse,
  UserService,
} from '../../../../proto/build/user';

@Injectable()
export class AuthService implements OnModuleInit {
  private userService: UserService;
  @Inject(ConfigService)
  private configService: ConfigService;
  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}
  onModuleInit() {
    this.userService = promisify(
      this.client.getService<UserService>('UserService'),
    );
  }
  async validateUser(email: string, password: string): Promise<UserResponse> {
    const user = await this.userService.findUserByEmail({ email });
    const match = await compare(password, user.hash);
    if (match) return user;
    throw new RpcException('Invalid login credentials');
  }

  async verifyUserExist(email: string): Promise<IsValid> {
    return this.userService.doesUserExistByEmail({ email });
  }

  async register(data: UserData): Promise<NewUser> {
    return this.userService.create(data);
  }

  generateToken(payload: IPayload, expiresIn = '2h'): string {
    const SECRET = this.configService.get<string>('SECRET');
    return sign(payload, SECRET, { expiresIn });
  }

  hashPassword(plainPassword: string): string {
    return hashSync(plainPassword, genSaltSync(10));
  }

  verifyToken(token: string): IPayload {
    try {
      const decoded = verify(token, this.configService.get<string>('SECRET'));
      return decoded as IPayload;
    } catch (_err) {
      throw new RpcException('Invalid token');
    }
  }
}
