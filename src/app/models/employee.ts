import { EmployeePosition } from '../enumerations/enum-constants';

export class Employee {
    id: number;
    name: string;
    surname: string;
    personId: string;
    email: string;
    phoneNumber: string;
    address: string;
    position: EmployeePosition;
    startingDate: Date;
}