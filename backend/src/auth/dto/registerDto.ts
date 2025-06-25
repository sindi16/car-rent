import { IsNotEmpty, IsString, IsEmail, IsNumber } from "class-validator";
export class RegisterDto {

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNumber()
  phone: number;

  @IsNotEmpty()
  @IsString()
  password: string;

}