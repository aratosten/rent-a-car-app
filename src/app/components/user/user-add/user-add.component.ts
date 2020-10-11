import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.css"],
})
export class UserAddComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  onAdd(): void {
    alert("User added successfully!");
    this.router.navigateByUrl("user-search");
  }

  onBack(): void {
    this.location.back();
  }
}
