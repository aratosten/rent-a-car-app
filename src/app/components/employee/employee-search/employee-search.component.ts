import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { EmployeeDetailsComponent } from "../../popups/employee-details/employee-details.component";

@Component({
  selector: "app-employee-search",
  templateUrl: "./employee-search.component.html",
  styleUrls: ["./employee-search.component.css"],
})
export class EmployeeSearchComponent implements OnInit {
  constructor(private matDialog: MatDialog, private router: Router) {}

  ngOnInit() {}

  onEmployee(): Observable<any> {
    const dialogRef: MatDialogRef<EmployeeDetailsComponent> = this.matDialog.open(
      EmployeeDetailsComponent,
      {
        panelClass: "dialog-box",
        autoFocus: false,
      }
    );

    return dialogRef.afterClosed();
  }

  onAdd(): void {
    this.router.navigateByUrl("/employee-add");
  }
}
