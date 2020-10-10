import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-vehicle-rent",
  templateUrl: "./vehicle-rent.component.html",
  styleUrls: ["./vehicle-rent.component.css"],
})
export class VehicleRentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onRent(): void {
    this.router.navigateByUrl("/vehicle-list");
    alert("Car rented successfully");
  }

  onBack(): void {
    this.router.navigateByUrl("/vehicle-list");
  }
}
