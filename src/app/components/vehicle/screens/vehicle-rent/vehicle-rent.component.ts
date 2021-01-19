import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerAddFormGroup } from 'src/app/components/form-groups/customer-add.formgroup';
import { Vehicle } from 'src/app/models/vehicle';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: "app-vehicle-rent",
  templateUrl: "./vehicle-rent.component.html",
  styleUrls: ["./vehicle-rent.component.css"],
})
export class VehicleRentComponent implements OnInit {
  isFromFieldFocused: boolean = false;
  isToFieldFocused: boolean = false;
  customerAddFormGroup: CustomerAddFormGroup = new CustomerAddFormGroup(this.customValidationService);
  vehicle: Vehicle = this.vehicleService.vehicles[0];

  constructor(
    private router: Router,
    private customValidationService: CustomvalidationService,
    private vehicleService: VehicleService) {}

  ngOnInit() {}

  onRent(): void {
    this.router.navigateByUrl("/vehicle-list");
    alert("Car rented successfully");
  }

  onBack(): void {
    this.router.navigateByUrl("/vehicle-list");
  }

  onFocus(isFromField: boolean): void {
    isFromField ? this.isFromFieldFocused = true : this.isToFieldFocused = true;
  }

  onFocusOut(isFromField: boolean): void {
    isFromField ? this.isFromFieldFocused = false : this.isToFieldFocused = false;
  }
}
