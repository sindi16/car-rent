
import { Controller, Post, Get, Body } from '@nestjs/common';
import { BookingDto } from './dto/booking.dto';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) { }

  @Post('create')
  async create(@Body() dto: BookingDto) {
    return await this.bookingService.createBooking(dto);
  }

  @Get('all')
  async getAll() {
    return await this.bookingService.getAllBookings();
  }
}
