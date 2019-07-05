import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {

  }

  login() {
    if (this.loginForm.invalid) {
      alert("Please enter valid username and credentials");
      this.loginForm.reset();
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

}
