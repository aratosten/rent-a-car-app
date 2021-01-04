import { FormControl, FormGroup } from '@angular/forms';

export class VechicleSearchFormGroup extends FormGroup {
    constructor () {
        super({
            brand: new FormControl(),
            model: new FormControl(),
            numberOfSeats: new FormControl(),
            from: new FormControl(),
            to: new FormControl(),
            vehicleType: new FormControl(),
            modelYear: new FormControl(),
            fuelType: new FormControl()
        });
    }

    public get brand(): FormControl {
        return this.get('brand') as FormControl;
    }

    public get model(): FormControl {
        return this.get('model') as FormControl;
    }

    public get numberOfSeats(): FormControl {
        return this.get('numberOfSeats') as FormControl;
    }

    public get from(): FormControl {
        return this.get('from') as FormControl;
    }

    public get to(): FormControl {
        return this.get('to') as FormControl;
    }

    public get vehicleType(): FormControl {
        return this.get('vehicleType') as FormControl;
    }

    public get modelYear(): FormControl {
        return this.get('modelYear') as FormControl;
    }

    public get fuelType(): FormControl {
        return this.get('fuelType') as FormControl;
    }
}