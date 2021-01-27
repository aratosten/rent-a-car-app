import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { EmployeeAddFormGroup } from '../../form-groups/employee-add.formgroup';

@Component({
  selector: "app-employee-add",
  templateUrl: "./employee-add.component.html",
  styleUrls: ["./employee-add.component.css"],
})
export class EmployeeAddComponent implements OnInit {
  employeeAddFormGroup: EmployeeAddFormGroup = new EmployeeAddFormGroup(this.customValidationService);

  constructor(
    private router: Router, 
    private location: Location,
    private customValidationService: CustomvalidationService) {}

  ngOnInit() {}

  onAdd(): void {
    alert("Employee added successfully!");
    this.router.navigateByUrl("employee-search");
  }

  onBack(): void {
    this.location.back();
  }
}
