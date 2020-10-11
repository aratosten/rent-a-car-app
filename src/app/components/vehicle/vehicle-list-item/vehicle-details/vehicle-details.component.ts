import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-vehicle-details",
  templateUrl: "./vehicle-details.component.html",
  styleUrls: ["./vehicle-details.component.css"],
})
export class VehicleDetailsComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<VehicleDetailsComponent>,
    private router: Router
  ) {}

  ngOnInit() {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSelect(): void {
    this.router.navigateByUrl("vehicle-rent");
    this.dialogRef.close();
  }
}
