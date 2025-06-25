// src/booking/entity/booking.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { VehicleEntity } from 'src/vehicles/entity/vehicle.entity';

@Entity('bookings')
export class BookingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  email: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  // 🚨 ADD THIS RELATION so that `vehicle` exists!
  @ManyToOne(() => VehicleEntity, (vehicle) => vehicle.bookings)
  @JoinColumn({ name: 'vehicleId' }) // Optional: gives you vehicleId in table
  vehicle: VehicleEntity;
}
