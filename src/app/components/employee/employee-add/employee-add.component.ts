import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeePosition } from 'src/app/enumerations/enum-constants';
import { Employee } from 'src/app/models/employee';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeAddFormGroup } from '../../form-groups/employee-add.formgroup';

@Component({
  selector: "app-employee-add",
  templateUrl: "./employee-add.component.html",
  styleUrls: ["./employee-add.component.css"],
})
export class EmployeeAddComponent implements OnInit {
  employeePositions: string[] = Object.values(EmployeePosition);
  employeeAddFormGroup: EmployeeAddFormGroup = new EmployeeAddFormGroup(this.customValidationService);
  updatingEmployee: Employee;
  isUpdating: boolean = false;

  constructor(
    private router: Router, 
    private location: Location,
    private customValidationService: CustomvalidationService,
    private employeeService: EmployeeService) {
      this.updatingEmployee = this.router.getCurrentNavigation().extras as Employee;

      if (this.updatingEmployee.id) {
        this.employeeAddFormGroup.setValue({
          name: this.updatingEmployee.name,
          surname: this.updatingEmployee.surname,
          personID: this.updatingEmployee.personId,
          email: this.updatingEmployee.email,
          phone: this.updatingEmployee.phoneNumber,
          address: this.updatingEmployee.address,
          position: this.updatingEmployee.position,
          from: this.updatingEmployee.startingDate
        });

        this.isUpdating = true;
      }
    }

  ngOnInit() {}

  onAddOrUpdate(): void {
    if (this.isUpdating) {
      this.onUpdate();
    } else {
      this.onAdd();
    }
  }

  onAdd(): void {
    if (!this.employeeAddFormGroup.valid) {
      return;
    }

    this.employeeService.addEmployee(this.employeeAddFormGroup);

    alert("Employee added successfully!");
    this.router.navigateByUrl("employee-search");
  }

  onUpdate(): void {
    if (!this.employeeAddFormGroup.valid) {
      return;
    }

    const result = this.employeeService.updateEmployee(this.updatingEmployee.id, this.employeeAddFormGroup);

    if (result) {
      alert("Employee updated successfully!");
    } else {
      alert("Unable to find employee");
    }
    
    this.router.navigateByUrl("employee-search");
  }

  onBack(): void {
    this.location.back();
  }
}
