import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: "app-vehicle-list-item",
  templateUrl: "./vehicle-list-item.component.html",
  styleUrls: ["./vehicle-list-item.component.css"],
})
export class VehicleListItemComponent implements OnInit {
  @ViewChild("vehicleListItem", { static: false }) vehicleListItem: ElementRef;
  @Input() vehicle;
  isVehicleAvailable: boolean = false;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.isVehicleAvailable = this.vehicleService.isVehicleAvailable(this.vehicle);
  }

  open() {}
}
