import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from './entity/booking.entity';
import { Repository } from 'typeorm';
import { BookingDto } from './dto/booking.dto';
import { VehicleEntity } from 'src/vehicles/entity/vehicle.entity';


@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingEntity) private readonly bookingRepo: Repository<BookingEntity>,
    @InjectRepository(VehicleEntity) private readonly vehicleRepo: Repository<VehicleEntity>,
  ) { }

  async createBooking(data: BookingDto) {
    const vehicle = await this.vehicleRepo.findOne({ where: { id: data.vehicleId } });
    if (!vehicle) throw new Error('Vehicle not found');

    const booking = this.bookingRepo.create({ ...data, vehicle });
    return this.bookingRepo.save(booking);
  }

  async getAllBookings() {
    return this.bookingRepo.find({ relations: ['vehicle'] });
  }
}


