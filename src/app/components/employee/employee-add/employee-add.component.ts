import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee-add",
  templateUrl: "./employee-add.component.html",
  styleUrls: ["./employee-add.component.css"],
})
export class EmployeeAddComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  onAdd(): void {
    alert("Employee added successfully!");
    this.router.navigateByUrl("employee-search");
  }

  onBack(): void {
    this.location.back();
  }
}
