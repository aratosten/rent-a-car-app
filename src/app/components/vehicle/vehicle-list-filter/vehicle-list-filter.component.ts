import { Component, OnInit } from "@angular/core";
import { VehicleService } from "src/app/services/vehicle.service";

@Component({
  selector: "app-vehicle-list-filter",
  templateUrl: "./vehicle-list-filter.component.html",
  styleUrls: ["./vehicle-list-filter.component.css"],
})
export class VehicleListFilterComponent implements OnInit {
  cars: any[];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.cars = this.vehicleService.getVehicles();
  }

  onSearch(): void {
    window.location.reload();
  }
}
