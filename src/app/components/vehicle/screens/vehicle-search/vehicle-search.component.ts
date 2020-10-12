import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdvancedArrow } from "src/app/enumerations/enum-constants";
import { VehicleService } from "src/app/services/vehicle.service";

@Component({
  selector: "app-vehicle-search",
  templateUrl: "./vehicle-search.component.html",
  styleUrls: ["./vehicle-search.component.css"],
})
export class VehicleSearchComponent implements OnInit {
  cars: any[];
  advanced = false;
  advanced_arrow = AdvancedArrow.Down;

  constructor(private router: Router, private vehicleService: VehicleService) {}

  ngOnInit() {
    this.cars = this.vehicleService.getVehicles();
  }

  changeAdvancedSettings(): void {
    this.advanced = !this.advanced;
    this.advanced_arrow =
      this.advanced_arrow === AdvancedArrow.Down
        ? AdvancedArrow.Up
        : AdvancedArrow.Down;
  }

  onSearch(): void {
    this.router.navigateByUrl("/vehicle-list");
  }

  onAdd(): void {
    this.router.navigateByUrl("/vehicle-add");
  }
}
