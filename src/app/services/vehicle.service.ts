import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class VehicleService {
  vehicles: any[] = [
    {
      brand: "Porsche",
      model: "Taycan",
      numberOfSeats: 4,
      isAvailable: 1,
      vehicleType: "Sedan",
      modelYear: 2020,
      fuelType: "Electric",
      color: "Green",
      image: "https://mlfree.com/wp-content/uploads/2017/07/vw_golf_5_01-1.jpg",
    },
    {
      brand: "Volkswagen",
      model: "Golf 5",
      numberOfSeats: 5,
      isAvailable: 1,
      vehicleType: "Coupe",
      modelYear: 2004,
      fuelType: "Diesel",
      color: "Gray",
      image: "https://mlfree.com/wp-content/uploads/2017/07/vw_golf_5_01-1.jpg",
    },
    {
      brand: "Volvo",
      model: "S60",
      numberOfSeats: 5,
      isAvailable: 1,
      vehicleType: "Sedan",
      modelYear: 2005,
      fuelType: "Petrol",
      color: "Yellow",
      image: "https://mlfree.com/wp-content/uploads/2017/07/vw_golf_5_01-1.jpg",
    },
  ];

  constructor() {}

  getVehicles(): any[] {
    return this.vehicles.slice();
  }
}
