import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', {static: false}) loginForm: NgForm;
  isLogin: boolean = true;
  isInvalidLogin: boolean = false;
  user: User = new User(this.userService.getNextUserId(), '', '');
  rePassword: string;

  constructor(private router: Router, private userService: UserService,) {}

  ngOnInit() {}

  onLink(): void {
    this.loginForm.resetForm();
    this.isLogin = !this.isLogin;
    this.isInvalidLogin = false;
  }

  onSubmit(): void {
    if (this.isLogin) {
      this.onLogin();
    } else {
      this.onRegister();
    }
  }

  onLogin(): void {
    this.isInvalidLogin = false;

    // if (!this.loginForm.form.valid) {
    //   this.isInvalidLogin = true;
    //   return;
    // }

    var matchedUser = this.userService.matchUser(this.user);

    if (matchedUser) {
      this.router.navigateByUrl("/vehicle-search");
    } else {
      this.isInvalidLogin = true;
    }
  }

  onRegister(): void {
    if (!this.loginForm.form.valid) {
      return;
    }

    this.userService.addUser(this.user);
    this.isLogin = true;
    alert('User added successfully!');
    this.loginForm.resetForm();
  }
}
