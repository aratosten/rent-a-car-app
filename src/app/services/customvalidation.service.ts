import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Vehicle } from '../models/vehicle';
import { UserService } from './user.service';
import { VehicleService } from './vehicle.service';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  constructor (
    private userService: UserService,
    private vehicleService: VehicleService) {}

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  matchExistingEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      var users = this.userService.getUsers();

      var result = users.findIndex(user => user.email === control.value);

      if (result != -1) {
        return { 'existingEmail': true };
      }

      return null;
    };
  }

  checkDateValidity(vehicleId: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const vehicle: Vehicle = this.vehicleService.getVehicleById(vehicleId);

      var isDateValid: boolean = true;
      if (vehicle) {
        const selectedDate: Date = new Date(control.value);
        vehicle.rentSchedules.forEach(rentSchedule => {
          if (selectedDate >= rentSchedule.from && selectedDate <= rentSchedule.to) {
            isDateValid = false;
          }
        });
      }

      if (isDateValid) {
        return null;
      }

      return { 'invalidDate': true };
    }
  }

  checkMinimumDate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const today: Date = new Date();
      today.setMinutes(today.getMinutes() - 1);
      const date: Date = new Date(control.value);
      if (date < today) {
        return { 'minimumDate': true };
      }

      return null;
    }
  }
}
