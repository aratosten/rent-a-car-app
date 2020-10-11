import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserDetailsComponent } from "../../popups/user-details/user-details.component";

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.component.html",
  styleUrls: ["./user-search.component.css"],
})
export class UserSearchComponent implements OnInit {
  constructor(private matDialog: MatDialog, private router: Router) {}

  ngOnInit() {}

  onUser(): Observable<any> {
    const dialogRef: MatDialogRef<UserDetailsComponent> = this.matDialog.open(
      UserDetailsComponent,
      {
        panelClass: "dialog-box",
        autoFocus: false,
      }
    );

    return dialogRef.afterClosed();
  }

  onAdd(): void {
    this.router.navigateByUrl("/user-add");
  }
}
