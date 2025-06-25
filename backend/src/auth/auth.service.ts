import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ServiceHandler } from 'src/errorHandler/service.error';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

import { UserEntity } from 'src/users/entity/user.entity';
import { RegisterDto } from './dto/registerDto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/loginDto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private userService: UsersService) { }

  public async authUserId(request: Request): Promise<number> {
    try {
      const jwt = request.cookies?.jwt;
      if (!jwt) {
        throw new ServiceHandler("You are anauthorized", HttpStatus.UNAUTHORIZED);
      }

      const decodedToken: any = this.jwtService.decode(jwt);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp < currentTime) {
        throw new HttpException("Token expired", HttpStatus.UNAUTHORIZED);
      }
      const { id } = await this.jwtService.verifyAsync(jwt);
      return id;
    } catch (error) {
      throw new ServiceHandler(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  public async registerUser(bodyParam: RegisterDto): Promise<{ user: UserEntity, token: string }> {
    try {
      const checkUser = await this.userService.findByEmail(bodyParam.email);
      if (checkUser) {
        throw new ServiceHandler("You are already registered", HttpStatus.FOUND);
      }

      const hashedPassword = await bcrypt.hash(bodyParam.password, 10);
      const user = await this.userService.registerUser({
        ...bodyParam,
        password: hashedPassword,
        roles: 'admin',
      });
      const token = await this.jwtService.signAsync({ id: user.id });
      return { user, token };
    } catch (error) {
      throw new ServiceHandler(error.response, error.status);
    }
  }


  public async loginUser(bodyParam: LoginDto): Promise<{ user: UserEntity, token: string }> {
    try {
      const user = await this.userService.findByEmail(bodyParam.email);
      if (!user) {
        throw new ServiceHandler("user with this email was not found", HttpStatus.NOT_FOUND)
      }
      const password = await bcrypt.compare(bodyParam.password, user?.password)
      if (!password) {
        throw new ServiceHandler("your password is incorrect", HttpStatus.NOT_FOUND)
      }
      const token = await this.jwtService.signAsync({ id: user.id });
      return { user, token };
    } catch (error) {
      throw new ServiceHandler(error.response, error.status);
    }
  }

}
