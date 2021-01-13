import { Component, EventEmitter, OnInit } from "@angular/core";
import { VehicleType, FuelType } from 'src/app/enumerations/enum-constants';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleSearchFilter } from 'src/app/models/vehicle-search-filter';
import { VehicleService } from "src/app/services/vehicle.service";
import { VehicleSearchFormGroup } from '../../form-groups/vehicle-search-formgroup';

@Component({
  selector: "app-vehicle-list-filter",
  templateUrl: "./vehicle-list-filter.component.html",
  styleUrls: ["./vehicle-list-filter.component.css"],
})
export class VehicleListFilterComponent implements OnInit {
  vehicleTypes: string[] = Object.values(VehicleType);
  fuelTypes: string[] = Object.values(FuelType);
  vehicleBrands: string[] = this.vehicleService.getVehicleBrands();
  vehicleModels: string[] = [];

  searchFilters: VehicleSearchFilter = this.vehicleService.filters;
  vehicleSearchForm: VehicleSearchFormGroup = new VehicleSearchFormGroup();

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleSearchForm.setValue({
      brand: this.searchFilters.brand,
      model: this.searchFilters.model,
      numberOfSeats: this.searchFilters.numberOfSeats,
      from: this.searchFilters.from,
      to: this.searchFilters.to,
      vehicleType: this.searchFilters.vehicleType,
      modelYear: this.searchFilters.modelYear,
      fuelType: this.searchFilters.fuelType
    })
  }

  onBrandChanged(brand): void {
    this.vehicleModels = this.vehicleService.getVehicleModels(brand);
  }

  onSearch(): void {
    this.vehicleService.setFilters(this.vehicleSearchForm);
    this.vehicleService.onFilterChange.emit();
  }
}
