import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StoreService } from '../store.service';
import Swal from 'sweetalert2';

/*
*  @description :: Reset Password page which will send as the link in email.
*  @author      :: Sharmila Thirumalainathan, B00823668
*/

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetForm: FormGroup;
  id: string;

  constructor(private fb: FormBuilder, private store: StoreService) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
    }, { validator: this.checkPasswords })
  }

  ngOnInit() {
    const param = new URLSearchParams(window.location.search);
    this.id = param.get("id");
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  resetPassword() {
    if (this.resetForm.invalid) {
      Swal.fire('Oops..', 'Please enter required details', 'error')
      this.resetForm.reset();
    } else {
      var data = this.resetForm.value;
      data['id'] = this.id;
      delete data['confirmPassword'];
      this.store.post('/resetpassword', data).subscribe((res) => {
        Swal.fire('Password reset successfully', 'Continue to <a href="/login">Login</a>', 'success')
      }, err => {
        console.log(err);
      });
    }
  }

}
