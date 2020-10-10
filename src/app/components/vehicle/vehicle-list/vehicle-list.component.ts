import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { VehicleDetailsComponent } from "../../popups/vehicle-details/vehicle-details.component";

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.css"],
})
export class VehicleListComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit() {}

  onVehicle(): Observable<any> {
    let dialogRef: MatDialogRef<VehicleDetailsComponent> = this.matDialog.open(
      VehicleDetailsComponent,
      {
        panelClass: "dialog-box",
        autoFocus: false,
      }
    );

    return dialogRef.afterClosed();
  }
}
