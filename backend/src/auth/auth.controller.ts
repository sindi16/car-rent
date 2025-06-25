import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { RegisterDto } from 'src/users/dto/user.dto';
import { ServiceHandler } from 'src/errorHandler/service.error';
import { UserEntity } from 'src/users/entity/user.entity';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { LoginDto } from './dto/loginDto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @Post('register')
  public async register(@Body() bodyParam: RegisterDto, @Res({ passthrough: true }) response: Response): Promise<UserEntity> {
    try {
      const { user, token } = await this.authService.registerUser(bodyParam);
      response.cookie('jwt', token, { httpOnly: true });
      return user;
    } catch (error) {
      throw new ServiceHandler(error.response, error.status);
    }
  }

  @Post('login')
  public async login(@Body() bodyParam: LoginDto, @Res({ passthrough: true }) response: Response): Promise<UserEntity> {
    try {
      const { user, token } = await this.authService.loginUser(bodyParam);
      response.cookie('jwt', token, { httpOnly: true });
      return user;
    } catch (error) {
      throw new ServiceHandler(error.response, error.status);
    }
  }

  @Post('logout')
  public logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return { "message": "success", "status": 201 };
  }

}