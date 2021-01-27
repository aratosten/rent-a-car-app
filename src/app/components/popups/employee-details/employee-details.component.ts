import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EmployeeDetailsComponent>,
    private router: Router
  ) {}

  ngOnInit() {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {
    this.router.navigateByUrl("employee-list");
    this.dialogRef.close();
  }
}
