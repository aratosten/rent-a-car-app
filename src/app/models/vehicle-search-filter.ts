import { FuelType, VehicleType } from '../enumerations/enum-constants';

export class VehicleSearchFilter {
    brand: string;
    model: string;
    numberOfSeats: number;
    to: Date;
    from: Date;
    vehicleType: VehicleType;
    modelYear: number;
    fuelType: FuelType;
}