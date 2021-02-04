import { Color, FuelType, VehicleType } from '../enumerations/enum-constants';
import { RentSchedule } from './rent-schedule';

export class Vehicle {
    id: number;
    brand: string;
    model: string;
    numberOfSeats: number;
    rentSchedules: RentSchedule[];
    vehicleType: VehicleType;
    modelYear: number;
    fuelType: FuelType;
    color: Color;
    location: string;
    plateNumber: string;
    image: string;
}