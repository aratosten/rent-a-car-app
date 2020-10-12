import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VehicleService } from "src/app/services/vehicle.service";

@Component({
  selector: "app-vehicle-add",
  templateUrl: "./vehicle-add.component.html",
  styleUrls: ["./vehicle-add.component.css"],
})
export class VehicleAddComponent implements OnInit {
  cars: any[];

  constructor(
    private router: Router,
    private location: Location,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.cars = this.vehicleService.getVehicles();
  }

  onAdd(): void {
    alert("Vehicle added successfully!");
    this.router.navigateByUrl("vehicle-list");
  }

  onBack(): void {
    this.location.back();
  }
}
