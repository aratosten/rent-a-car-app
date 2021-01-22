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
  vehicle: Vehicle;
  minDate: Date = new Date();
  customerAddFormGroup: CustomerAddFormGroup;

  constructor(
    private router: Router,
    private customValidationService: CustomvalidationService,
    private vehicleService: VehicleService) {
      this.vehicle = this.router.getCurrentNavigation().extras as Vehicle;
    }

  ngOnInit() {
    this.customerAddFormGroup = new CustomerAddFormGroup(this.customValidationService, this.vehicle.id);
  }

  onRent(): void {
    if (!this.customerAddFormGroup.valid) {
      return;
    }

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
