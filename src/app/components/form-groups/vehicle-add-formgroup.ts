import { FormControl, FormGroup, Validators } from '@angular/forms';

export class VehicleAddFormGroup extends FormGroup {
    constructor () {
        super({
            brand: new FormControl(null, Validators.required),
            model: new FormControl(null, Validators.required),
            numberOfSeats: new FormControl(null, Validators.required),
            vehicleType: new FormControl(null, Validators.required),
            modelYear: new FormControl(null, Validators.required),
            fuelType: new FormControl(null, Validators.required),
            color: new FormControl(null, Validators.required),
            location: new FormControl(null, Validators.required),
            plateNumber: new FormControl(null, Validators.required),
            image: new FormControl(null, Validators.required)
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

    public get vehicleType(): FormControl {
        return this.get('vehicleType') as FormControl;
    }

    public get modelYear(): FormControl {
        return this.get('modelYear') as FormControl;
    }

    public get fuelType(): FormControl {
        return this.get('fuelType') as FormControl;
    }

    public get color(): FormControl {
        return this.get('color') as FormControl;
    }

    public get location(): FormControl {
        return this.get('location') as FormControl;
    }

    public get plateNumber(): FormControl {
        return this.get('plateNumber') as FormControl;
    }

    public get image(): FormControl {
        return this.get('image') as FormControl;
    }
}