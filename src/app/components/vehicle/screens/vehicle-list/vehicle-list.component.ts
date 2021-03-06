import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { VehicleDetailsComponent } from "src/app/components/popups/vehicle-details/vehicle-details.component";
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from "src/app/services/vehicle.service";

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.css"],
})
export class VehicleListComponent implements OnInit {
  cars: Vehicle[];

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.cars = this.vehicleService.getVehicles();
    this.vehicleService.onFilterChange.subscribe(() => this.cars = this.vehicleService.getVehicles());
  }

  onVehicle(index: number): Observable<any> {
    let dialogRef: MatDialogRef<VehicleDetailsComponent> = this.matDialog.open(
      VehicleDetailsComponent,
      {
        panelClass: "dialog-box",
        autoFocus: false,
        data: {
          car: this.cars[index]
        },
      }
    );

    return dialogRef.afterClosed();
  }

  onAdd(): void {
    this.router.navigateByUrl("/vehicle-add");
  }
}
