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
      isAvailable: true,
      vehicleType: "Sedan",
      modelYear: 2020,
      fuelType: "Electric",
      color: "Green",
      location: "Zmaja od Bosne bb",
      image:
        "https://www.teslarati.com/wp-content/uploads/2019/03/PorscheTaycan_black_front-e1552066022563.jpg",
    },
    {
      brand: "Volkswagen",
      model: "Golf 5",
      numberOfSeats: 5,
      isAvailable: false,
      vehicleType: "Coupe",
      modelYear: 2004,
      fuelType: "Diesel",
      color: "Gray",
      location: "Antuna Hangija 9",
      image: "https://mlfree.com/wp-content/uploads/2017/07/vw_golf_5_01-1.jpg",
    },
    {
      brand: "Volvo",
      model: "S60",
      numberOfSeats: 5,
      isAvailable: true,
      vehicleType: "Sedan",
      modelYear: 2005,
      fuelType: "Petrol",
      color: "Yellow",
      location: "Dzemala Bijedica 54",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Volvo_S60_II_D3_front_20101002.jpg",
    },
    {
      brand: "Renault",
      model: "Megane",
      numberOfSeats: 5,
      isAvailable: false,
      vehicleType: "Coupe",
      modelYear: 2006,
      fuelType: "Diesel",
      color: "Blue",
      location: "Braće Begić 62",
      image:
        "https://www.renault-klub.hr/forum/uploads/monthly_2018_09/20180909_142415.jpg.bec528daec57c89275f5a8382df550ac.jpg",
    },
    {
      brand: "Opel",
      model: "Vectra",
      numberOfSeats: 5,
      isAvailable: true,
      vehicleType: "Coupe",
      modelYear: 2004,
      fuelType: "Diesel",
      color: "Grey",
      location: "Gradacacka 29",
      image:
        "https://v2h4h4i3.stackpathcdn.com/media/k2/galleries/358/Opel_Vectra_C_rear_20090920.jpg",
    },
    {
      brand: "Fiat",
      model: "Punto",
      numberOfSeats: 5,
      isAvailable: true,
      vehicleType: "Coupe",
      modelYear: 2001,
      fuelType: "Petrol",
      color: "Red",
      location: "Trg Heroja 23",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Fiat_Punto_front_20071204.jpg",
    },
    {
      brand: "Ford",
      model: "Focus",
      numberOfSeats: 5,
      isAvailable: false,
      vehicleType: "Coupe",
      modelYear: 2002,
      fuelType: "Petrol",
      color: "Grey",
      location: "Brčanska 12",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ford_Focus_2004.jpg",
    },
  ];

  constructor() {}

  getVehicles(): any[] {
    return this.vehicles.slice();
  }
}
