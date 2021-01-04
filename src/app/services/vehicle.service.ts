import { Injectable } from "@angular/core";
import { Color, FuelType, VehicleType } from '../enumerations/enum-constants';
import { Vehicle } from '../models/vehicle';
import { VehicleModel } from '../models/vehicle-model';

@Injectable({
  providedIn: "root",
})
export class VehicleService {
  vehicleModels: VehicleModel[] = [
    {
      brand: 'Porsche',
      models: [
        'Taycan',
        'Panamera',
        '911',
        'Macan',
        'Cayenne',
        'Cayman'
      ]
    },
    {
      brand: 'Volkswagen',
      models: [
        'Golf',
        'Passat',
        'Touareg',
        'Tiguan',
        'Arteon'
      ]
    },
    {
      brand: 'Volvo',
      models: [
        'XC90',
        'XC60',
        'XC40',
        'S60',
        'S90'
      ]
    }
  ];

  vehicles: Vehicle[] = [
    {
      brand: "Porsche",
      model: "Taycan",
      numberOfSeats: 4,
      rentSchedules: [
        {
          to: new Date('12/12/2020'),
          from: new Date('18/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2020,
      fuelType: FuelType.ELECTRIC,
      color: Color.GREEN,
      location: "Zmaja od Bosne bb",
      image:
        "https://www.teslarati.com/wp-content/uploads/2019/03/PorscheTaycan_black_front-e1552066022563.jpg",
    },
    {
      brand: "Volkswagen",
      model: "Golf 5",
      numberOfSeats: 5,
      rentSchedules: [
        {
          to: new Date('12/12/2020'),
          from: new Date('18/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2018,
      fuelType: FuelType.DIESEL,
      color: Color.GREY,
      location: "Antuna Hangija 9",
      image: "https://mlfree.com/wp-content/uploads/2017/07/vw_golf_5_01-1.jpg",
    },
    {
      brand: "Volvo",
      model: "S60",
      numberOfSeats: 5,
      rentSchedules: [
        {
          to: new Date('16/12/2020'),
          from: new Date('28/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2005,
      fuelType: FuelType.PETROL,
      color: Color.YELLOW,
      location: "Dzemala Bijedica 54",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Volvo_S60_II_D3_front_20101002.jpg",
    },
    {
      brand: "Renault",
      model: "Megane",
      numberOfSeats: 5,
      rentSchedules: [
        {
          to: new Date('20/12/2020'),
          from: new Date('30/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2010,
      fuelType: FuelType.DIESEL,
      color: Color.BLACK,
      location: "Braće Begić 62",
      image:
        "https://www.renault-klub.hr/forum/uploads/monthly_2018_09/20180909_142415.jpg.bec528daec57c89275f5a8382df550ac.jpg",
    },
    {
      brand: "Opel",
      model: "Vectra",
      numberOfSeats: 5,
      rentSchedules: [
        {
          to: new Date('10/12/2020'),
          from: new Date('18/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2006,
      fuelType: FuelType.DIESEL,
      color: Color.WHITE,
      location: "Gradacacka 29",
      image:
        "https://v2h4h4i3.stackpathcdn.com/media/k2/galleries/358/Opel_Vectra_C_rear_20090920.jpg",
    },
    {
      brand: "Fiat",
      model: "Punto",
      numberOfSeats: 5,
      rentSchedules: [
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2012,
      fuelType: FuelType.DIESEL,
      color: Color.RED,
      location: "Trg Heroja 23",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Fiat_Punto_front_20071204.jpg",
    },
    {
      brand: "Ford",
      model: "Focus",
      numberOfSeats: 5,
      rentSchedules: [
        {
          to: new Date('14/12/2020'),
          from: new Date('19/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2008,
      fuelType: FuelType.PETROL,
      color: Color.BLUE,
      location: "Brčanska 12",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ford_Focus_2004.jpg",
    },
  ];

  constructor() {}

  getVehicles(): any[] {
    return this.vehicles.slice();
  }

  getVehicleBrands(): string[] {
    var vehicleBrands: string[] = [];
    this.vehicleModels.map(v => vehicleBrands.push(v.brand));
    return vehicleBrands;
  }

  getVehicleModels(brand: string): string[] {
    var vehicleModel: VehicleModel = this.vehicleModels.find(v => v.brand === brand);
    
    if (vehicleModel) {
      return vehicleModel.models;
    }

    return [];
  }
}
