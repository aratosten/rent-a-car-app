import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-vehicle-list-item",
  templateUrl: "./vehicle-list-item.component.html",
  styleUrls: ["./vehicle-list-item.component.css"],
})
export class VehicleListItemComponent implements OnInit {
  @ViewChild("vehicleListItem", { static: false }) vehicleListItem: ElementRef;

  constructor() {}

  ngOnInit() {}

  open() {}
}
