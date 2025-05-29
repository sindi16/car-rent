import { IsString, IsInt, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class VehicleDto {
    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsString()
    @IsNotEmpty()
    model: string;

    @IsString()
    @IsNotEmpty()
    year: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsBoolean()
    @IsNotEmpty()
    available: boolean;

    @IsString()
    @IsNotEmpty()
    description: string;
}