import { FormControl, FormGroup, Validators } from '@angular/forms';

export class CustomerAddFormGroup extends FormGroup {
    constructor () {
        super({
            name: new FormControl(null, Validators.required),
            surname: new FormControl(null, Validators.required),
            personID: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            phone: new FormControl(null, Validators.required),
            address: new FormControl(null, Validators.required),
            from: new FormControl(null, Validators.required),
            to: new FormControl(null, Validators.required)
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