import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VehicleAddFormGroup } from 'src/app/components/form-groups/vehicle-add-formgroup';
import { Color, FuelType, VehicleType } from 'src/app/enumerations/enum-constants';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from "src/app/services/vehicle.service";

@Component({
  selector: "app-vehicle-add",
  templateUrl: "./vehicle-add.component.html",
  styleUrls: ["./vehicle-add.component.css"],
})
export class VehicleAddComponent implements OnInit {
  vehicleTypes: string[] = Object.values(VehicleType);
  fuelTypes: string[] = Object.values(FuelType);
  colors: string[] = Object.values(Color);
  vehicleBrands: string[] = this.vehicleService.getVehicleBrands();
  vehicleModels: string[] = [];
  cars: Vehicle[];

  vehicleAddForm: VehicleAddFormGroup = new VehicleAddFormGroup();

  constructor(
    private router: Router,
    private location: Location,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.cars = this.vehicleService.getVehicles();
  }

  onAdd(): void {
    if (!this.vehicleAddForm.valid) {
      return;
    }

    this.vehicleService.addVehicle(this.vehicleAddForm);
    alert("Vehicle added successfully!");
    this.router.navigateByUrl("vehicle-list");
  }

  onBack(): void {
    this.location.back();
  }

  onBrandChanged(): void {
    if (this.vehicleAddForm.brand.value) {
      this.vehicleModels = this.vehicleService.getVehicleModels(this.vehicleAddForm.brand.value);
    }
  }
}
