import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-vehicle-add",
  templateUrl: "./vehicle-add.component.html",
  styleUrls: ["./vehicle-add.component.css"],
})
export class VehicleAddComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  onAdd(): void {
    alert("Vehicle added successfully!");
    this.router.navigateByUrl("vehicle-list");
  }

  onBack(): void {
    this.location.back();
  }
}
