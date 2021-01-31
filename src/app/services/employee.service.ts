import { Injectable } from '@angular/core';
import { EmployeeAddFormGroup } from '../components/form-groups/employee-add.formgroup';
import { EmployeePosition } from '../enumerations/enum-constants';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John',
      surname: 'Snow',
      personId: '123654789',
      email: 'john@test.com',
      phoneNumber: '123654789',
      address: 'Ilirska 21',
      position: EmployeePosition.EMPLOYEE,
      startingDate: new Date('12/1/2021')
    }
  ];
  
  constructor() { }

  getNextEmployeeId(): number {
    return this.employees.length + 1;
  }

  getEmployees(): Employee[] {
    return [...this.employees];
  }

  addEmployee(employeeAddFormGroup: EmployeeAddFormGroup): void {
    const newEmployee: Employee = {
      id: this.getNextEmployeeId(),
      name: employeeAddFormGroup.name.value,
      surname: employeeAddFormGroup.surname.value,
      personId: employeeAddFormGroup.personID.value,
      email: employeeAddFormGroup.email.value,
      phoneNumber: employeeAddFormGroup.phone.value,
      address: employeeAddFormGroup.address.value,
      position: employeeAddFormGroup.position.value,
      startingDate: employeeAddFormGroup.from.value
    };

    this.employees.push(newEmployee);
  }

}
