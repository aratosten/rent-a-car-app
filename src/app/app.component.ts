import { Location } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private location: Location) {}

  ngOnInit() {}

  showTabs(): boolean {
    if (this.location.path() === "/login") {
      return false;
    }
    return true;
  }
}
