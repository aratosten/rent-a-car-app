import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  router: Router;

  title = "rent-a-car-app";
  showTabs = true;

  constructor(router: Router) {}

  ngOnInit() {
    // if (this.router.url === "/login") {
    //   this.showTabs = false;
    // }
  }
}
