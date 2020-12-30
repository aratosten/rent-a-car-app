import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appExistingEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ExistingEmailDirective, multi: true }]
})
export class ExistingEmailDirective implements Validator {

  constructor(private customValidationService: CustomvalidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidationService.matchExistingEmail()(control);
  }
}
