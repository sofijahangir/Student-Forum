import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private isLoading;
  private isLogin = true;

  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store: StoreService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {

  }

  changeView(isForgotPwd) {
    this.isLogin = !isForgotPwd;
  }

  forgotPassword() {
    if (this.forgotPasswordForm.invalid) {
      alert("Please enter valid E-mail");
      this.forgotPasswordForm.reset();
    } else {
      this.store.post('/forgotpassword', this.forgotPasswordForm.value).subscribe((res) => {
        alert("ok")
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
    }
  }

  login() {
    if (this.loginForm.invalid) {
      alert("Please enter valid E-mail and credentials");
      this.loginForm.reset();
    } else {
      this.isLoading = true;
      this.store.post('/signin', this.loginForm.value).subscribe((res) => {
        this.router.navigate(['/dashboard']);
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
    }
  }

}
