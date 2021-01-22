import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-vehicle-details",
  templateUrl: "./vehicle-details.component.html",
  styleUrls: ["./vehicle-details.component.css"],
})
export class VehicleDetailsComponent implements OnInit {
  car: any = this.data["car"];

  constructor(
    private dialogRef: MatDialogRef<VehicleDetailsComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSelect(): void {
    this.router.navigate(["vehicle-rent"], this.car);
    this.dialogRef.close();
  }
}
