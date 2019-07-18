import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StoreService } from '../store.service';
import Swal from 'sweetalert2';

/*
*  @description :: Login and reset password page
*  @author      :: Sharmila Thirumalainathan, B00823668
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private isLoading;
  public isLogin = true;

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
      Swal.fire('Oops..', 'Please enter valid E-mail', 'error')
      this.forgotPasswordForm.reset();
    } else {
      var data = {
        email: this.forgotPasswordForm.controls.email.value
      };
      this.store.post('/forgotpassword', data).subscribe((res) => {
        Swal.fire('Email Sent successfully', 'Please check your inbox for further steps.', 'success')
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
    }
  }

  login() {
    if (this.loginForm.invalid) {
      Swal.fire('Oops..', 'Please enter valid email and credentials', 'error')
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
