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
    plateNumber: string;
    image: string;

    isAvailable?(): boolean {
        var today = new Date();
        this.rentSchedules.forEach(rent => {
            if (rent.from >= today && rent.to <= today) {
                return false;
            }
        });

        return true;
    }
}