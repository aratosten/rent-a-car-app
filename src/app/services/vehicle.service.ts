import { Injectable, EventEmitter } from "@angular/core";
import { VehicleAddFormGroup } from '../components/form-groups/vehicle-add-formgroup';
import { VehicleSearchFormGroup } from '../components/form-groups/vehicle-search-formgroup';
import { Color, FuelType, VehicleType } from '../enumerations/enum-constants';
import { Vehicle } from '../models/vehicle';
import { VehicleModel } from '../models/vehicle-model';
import { VehicleSearchFilter } from '../models/vehicle-search-filter';

@Injectable({
  providedIn: "root",
})
export class VehicleService {
  onFilterChange: EventEmitter<any> = new EventEmitter<any>();

  filters: VehicleSearchFilter = {
    brand: null,
    model: null,
    numberOfSeats: null,
    to: null,
    from: null,
    vehicleType: null,
    modelYear: null,
    fuelType: null
  };

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
      id: 1,
      brand: "Porsche",
      model: "Taycan",
      numberOfSeats: 4,
      rentSchedules: [
        {
          vehicleId: 1,
          customerId: 1,
          to: new Date('12/12/2020'),
          from: new Date('18/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2020,
      fuelType: FuelType.ELECTRIC,
      color: Color.GREEN,
      location: "Zmaja od Bosne bb",
      plateNumber: "ABC-123",
      image:
        "https://www.teslarati.com/wp-content/uploads/2019/03/PorscheTaycan_black_front-e1552066022563.jpg",
    },
    {
      id: 2,
      brand: "Volkswagen",
      model: "Golf 5",
      numberOfSeats: 5,
      rentSchedules: [
        {
          vehicleId: 2,
          customerId: 2,
          to: new Date('12/12/2020'),
          from: new Date('18/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2018,
      fuelType: FuelType.DIESEL,
      color: Color.GREY,
      location: "Antuna Hangija 9",
      plateNumber: "BGH-123",
      image: "https://mlfree.com/wp-content/uploads/2017/07/vw_golf_5_01-1.jpg",
    },
    {
      id: 3,
      brand: "Volvo",
      model: "S60",
      numberOfSeats: 5,
      rentSchedules: [
        {
          vehicleId: 3,
          customerId: 3,
          to: new Date('16/12/2020'),
          from: new Date('28/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2005,
      fuelType: FuelType.PETROL,
      color: Color.YELLOW,
      location: "Dzemala Bijedica 54",
      plateNumber: "GLK-123",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Volvo_S60_II_D3_front_20101002.jpg",
    },
    {
      id: 4,
      brand: "Renault",
      model: "Megane",
      numberOfSeats: 5,
      rentSchedules: [
        {
          vehicleId: 4,
          customerId: 4,
          to: new Date('20/12/2020'),
          from: new Date('30/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2010,
      fuelType: FuelType.DIESEL,
      color: Color.BLACK,
      location: "Braće Begić 62",
      plateNumber: "GJD-123",
      image:
        "https://www.renault-klub.hr/forum/uploads/monthly_2018_09/20180909_142415.jpg.bec528daec57c89275f5a8382df550ac.jpg",
    },
    {
      id: 5,
      brand: "Opel",
      model: "Vectra",
      numberOfSeats: 5,
      rentSchedules: [
        {
          vehicleId: 5,
          customerId: 5,
          to: new Date('10/12/2020'),
          from: new Date('18/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2006,
      fuelType: FuelType.DIESEL,
      color: Color.WHITE,
      location: "Gradacacka 29",
      plateNumber: "TGH-123",
      image:
        "https://v2h4h4i3.stackpathcdn.com/media/k2/galleries/358/Opel_Vectra_C_rear_20090920.jpg",
    },
    {
      id: 6,
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
      plateNumber: "GJA-123",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Fiat_Punto_front_20071204.jpg",
    },
    {
      id: 7,
      brand: "Ford",
      model: "Focus",
      numberOfSeats: 5,
      rentSchedules: [
        {
          vehicleId: 7,
          customerId: 7,
          to: new Date('14/12/2020'),
          from: new Date('19/12/2020')
        }
      ],
      vehicleType: VehicleType.SEDAN,
      modelYear: 2008,
      fuelType: FuelType.PETROL,
      color: Color.BLUE,
      location: "Brčanska 12",
      plateNumber: "AVC-123",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ford_Focus_2004.jpg",
    },
  ];

  constructor() {}

  getVehicles(): Vehicle[] {
    var filteredVehicles = this.vehicles.slice();
    
    if (this.filters.brand) {
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle.brand === this.filters.brand);
    }
    if (this.filters.model) {
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle.model === this.filters.model);
    }
    if (this.filters.numberOfSeats) {
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle.numberOfSeats === this.filters.numberOfSeats);
    }
    if (this.filters.vehicleType) {
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle.vehicleType === this.filters.vehicleType);
    }
    if (this.filters.modelYear) {
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle.modelYear === this.filters.modelYear);
    }
    if (this.filters.fuelType) {
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle.fuelType === this.filters.fuelType);
    }
    if (this.filters.from && this.filters.to) {
      filteredVehicles = filteredVehicles.filter(vehicle => {
        vehicle.rentSchedules.forEach(rent => {
          if ((rent.from < this.filters.from && rent.to <= this.filters.from) 
          || (rent.from >= this.filters.from && rent.to > this.filters.from)) {
            return true;
          }
        });
        return false;
      });
    }

    return filteredVehicles;
  }

  getNextVehicleId(): number {
    return this.vehicles.length + 1;
  }

  addVehicle(vehicle: VehicleAddFormGroup): void {
    const newVehicle: Vehicle = {
      id: this.getNextVehicleId(),
      brand: vehicle.brand.value,
      model: vehicle.model.value,
      numberOfSeats: vehicle.numberOfSeats.value,
      vehicleType: vehicle.vehicleType.value,
      modelYear: vehicle.modelYear.value,
      fuelType: vehicle.fuelType.value,
      color: vehicle.color.value,
      location: vehicle.location.value,
      plateNumber: vehicle.plateNumber.value,
      image: vehicle.image.value,
      rentSchedules: []
    };
    
    this.vehicles.push(newVehicle);
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

  resetFilters(): void {
    this.filters = {
      brand: null,
      model: null,
      numberOfSeats: null,
      to: null,
      from: null,
      vehicleType: null,
      modelYear: null,
      fuelType: null
    };
  }

  setFilters(vehicleSearchFormGroup: VehicleSearchFormGroup): void {
    this.filters = {
      brand: vehicleSearchFormGroup.brand.value,
      model: vehicleSearchFormGroup.model.value,
      numberOfSeats: vehicleSearchFormGroup.numberOfSeats.value,
      to: vehicleSearchFormGroup.to.value,
      from: vehicleSearchFormGroup.from.value,
      vehicleType: vehicleSearchFormGroup.vehicleType.value,
      modelYear: vehicleSearchFormGroup.modelYear.value,
      fuelType: vehicleSearchFormGroup.fuelType.value
    };
  }
}
