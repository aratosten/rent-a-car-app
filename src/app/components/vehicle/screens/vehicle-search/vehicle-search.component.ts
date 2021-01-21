import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VehicleSearchFormGroup } from 'src/app/components/form-groups/vehicle-search-formgroup';
import { AdvancedArrow, FuelType, VehicleType } from "src/app/enumerations/enum-constants";
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from "src/app/services/vehicle.service";

@Component({
  selector: "app-vehicle-search",
  templateUrl: "./vehicle-search.component.html",
  styleUrls: ["./vehicle-search.component.css"],
})
export class VehicleSearchComponent implements OnInit {
  vehicleTypes: string[] = Object.values(VehicleType);
  fuelTypes: string[] = Object.values(FuelType);
  vehicleBrands: string[] = this.vehicleService.getVehicleBrands();
  vehicleModels: string[] = [];
  cars: Vehicle[];
  advanced = false;
  advanced_arrow = AdvancedArrow.Down;

  vehicleSearchForm: VehicleSearchFormGroup = new VehicleSearchFormGroup();

  constructor(private router: Router, private vehicleService: VehicleService) {}

  ngOnInit() {
    this.cars = this.vehicleService.getVehicles();
    this.vehicleService.resetFilters();
  }

  changeAdvancedSettings(): void {
    this.advanced = !this.advanced;
    this.advanced_arrow =
      this.advanced_arrow === AdvancedArrow.Down
        ? AdvancedArrow.Up
        : AdvancedArrow.Down;
  }

  onSearch(): void {
    this.vehicleService.setFilters(this.vehicleSearchForm);
    this.router.navigateByUrl("/vehicle-list");
  }

  onAdd(): void {
    this.router.navigateByUrl("/vehicle-add");
  }

  onBrandChanged(brand): void {
    this.vehicleModels = this.vehicleService.getVehicleModels(brand);
  }

  onReset(): void {
    this.vehicleSearchForm.reset();
  }
}
