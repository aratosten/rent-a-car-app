import { Directive, Input } from '@angular/core';
import { 
  FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]
})
export class MatchPasswordDirective implements Validator {
  @Input('appMatchPassword') matchPassword: string[] = [];

  constructor(private customValidationService: CustomvalidationService) { }

  validate(formGroup: FormGroup): ValidationErrors {
    return this.customValidationService.MatchPassword(this.matchPassword[0], this.matchPassword[1])(formGroup);
  }
}
