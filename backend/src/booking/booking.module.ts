
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from './entity/booking.entity';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { VehicleEntity } from 'src/vehicles/entity/vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookingEntity, VehicleEntity])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule { }
