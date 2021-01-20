import { Injectable } from '@angular/core';
import { CustomerAddFormGroup } from '../components/form-groups/customer-add.formgroup';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    {
      id: 1,
      firstName: 'Chael',
      lastName: 'Sonnen',
      personId: '123456789',
      email: 'cheal@test.com',
      address: 'Ilirska 20',
      phoneNumber: '033-687-687'
    }
  ];

  constructor() { }

  getNextCustomerId(): number {
    return this.customers.length + 1;
  }

  getCustomerByPersonId(personId: string) : Customer {
    return this.customers.find(c => c.personId === personId);
  }

  addCustomer(customerAddFormGroup: CustomerAddFormGroup): Customer {
    const newCustomer: Customer = {
      id: this.getNextCustomerId(),
      firstName: customerAddFormGroup.name.value,
      lastName: customerAddFormGroup.surname.value,
      personId: customerAddFormGroup.personID.value,
      email: customerAddFormGroup.email.value,
      address: customerAddFormGroup.address.value,
      phoneNumber: customerAddFormGroup.phone.value
    };

    this.customers.push(newCustomer);
    return newCustomer;
  }
}
