import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  onLink(): void {
    this.isLogin = !this.isLogin;
  }

  onSubmit(): void {
    if (this.isLogin) {
      this.router.navigateByUrl("/vehicle-search");
    }
  }
}
