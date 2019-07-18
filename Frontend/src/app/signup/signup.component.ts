import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StoreService } from '../store.service';
import Swal from 'sweetalert2';
import { Router } from "@angular/router";

/*
*  @description :: Signup-related handlings for the signup page.
*  @author      :: Sharmila Thirumalainathan, B00823668
*/

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private store: StoreService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
    }, { validator: this.checkPasswords })
  }

  ngOnInit() {
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  createAccount() {
    if (this.signupForm.invalid) {
      Swal.fire('Oops..', 'Please enter required details', 'error')
      this.signupForm.reset();
    } else {
      var data = {
        email: this.signupForm.controls.email.value,
        name: this.signupForm.controls.name.value,
        password: this.signupForm.controls.password.value
      };

      this.store.post('/user', data).subscribe((res) => {
        this.router.navigate(['/dashboard']);
      }, err => {
        console.log(err);
      });
    }
  }

}
