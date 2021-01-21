import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

export class CustomerAddFormGroup extends FormGroup {
    constructor (
        private customValidationService: CustomvalidationService,
        private vehicleId: number) {
        super({
            name: new FormControl(null, Validators.required),
            surname: new FormControl(null, Validators.required),
            personID: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email, customValidationService.matchExistingEmail]),
            phone: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
            address: new FormControl(null, Validators.required),
            from: new FormControl(null, [ Validators.required, customValidationService.checkMinimumDate(), customValidationService.checkDateValidity(vehicleId) ]),
            to: new FormControl(null, [ Validators.required, customValidationService.checkDateValidity(vehicleId) ])
        });
    }

    public get name(): FormControl {
        return this.get('name') as FormControl;
    }

    public get surname(): FormControl {
        return this.get('surname') as FormControl;
    }

    public get personID(): FormControl {
        return this.get('personID') as FormControl;
    }

    public get email(): FormControl {
        return this.get('email') as FormControl;
    }

    public get phone(): FormControl {
        return this.get('phone') as FormControl;
    }

    public get address(): FormControl {
        return this.get('address') as FormControl;
    }

    public get from(): FormControl {
        return this.get('from') as FormControl;
    }

    public get to(): FormControl {
        return this.get('to') as FormControl;
    }
}