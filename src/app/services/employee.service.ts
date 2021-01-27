import { Injectable } from '@angular/core';
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
}
