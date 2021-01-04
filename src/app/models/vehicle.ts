import { Color, FuelType, VehicleType } from '../enumerations/enum-constants';
import { RentSchedule } from './rent-schedule';

export class Vehicle {
    brand: string;
    model: string;
    numberOfSeats: number;
    rentSchedules: RentSchedule[];
    vehicleType: VehicleType;
    modelYear: number;
    fuelType: FuelType;
    color: Color;
    location: string;
    image: string;
}