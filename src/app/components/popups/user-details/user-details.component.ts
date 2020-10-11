import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<UserDetailsComponent>,
    private router: Router
  ) {}

  ngOnInit() {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {
    this.router.navigateByUrl("user-list");
    this.dialogRef.close();
  }
}
