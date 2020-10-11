import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdvancedArrow } from "src/app/enumerations/enum-constants";

@Component({
  selector: "app-vehicle-search",
  templateUrl: "./vehicle-search.component.html",
  styleUrls: ["./vehicle-search.component.css"],
})
export class VehicleSearchComponent implements OnInit {
  advanced = false;
  advanced_arrow = AdvancedArrow.Down;

  cars = [
    {
      brand: "Porsche",
      model: "Taycan",
      numberOfSeats: 4,
      isAvailable: 1,
      vehicleType: "Sedan",
      modelYear: 2020,
      fuelType: "Electric",
      color: "Green",
      image: "https://mlfree.com/wp-content/uploads/2017/07/vw_golf_5_01-1.jpg",
    },
    {
      brand: "Volkswagen",
      model: "Golf 5",
      numberOfSeats: 5,
      isAvailable: 1,
      vehicleType: "Coupe",
      modelYear: 2004,
      fuelType: "Diesel",
      color: "Gray",
      image: "https://mlfree.com/wp-content/uploads/2017/07/vw_golf_5_01-1.jpg",
    },
    {
      brand: "Volvo",
      model: "S60",
      numberOfSeats: 5,
      isAvailable: 1,
      vehicleType: "Sedan",
      modelYear: 2005,
      fuelType: "Petrol",
      color: "Yellow",
      image: "https://mlfree.com/wp-content/uploads/2017/07/vw_golf_5_01-1.jpg",
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

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
