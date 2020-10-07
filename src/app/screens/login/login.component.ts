import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;

  constructor() {}

  ngOnInit() {}

  onLink(): void {
    this.isLogin = !this.isLogin;
  }
}
