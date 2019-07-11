import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {

  addcourseform: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store: StoreService) { }

  ngOnInit() {
    this.addcourseform = this.fb.group({
      coursename: ['', Validators.required],
      coursecode: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.addcourseform.invalid) {
      alert("Please Enter Course Details");
      this.addcourseform.reset();
    } else {
      this.router.navigate(['/courses']);
    }
  }

  searchCourse(value: string) {
    if (value) {
      this.router.navigate(['/course/browse'], { queryParams: { keyword: value } });
    }
  }

  collapse() {
    if (document.getElementById("wrapper").classList.contains("collapse")) {
      document.getElementById("wrapper").classList.remove("collapse");
    } else {
      document.getElementById("wrapper").classList.add("collapse");
    }
  }

  logout() {
    this.store.post('/signout').subscribe((res) => {
      this.router.navigate(['/home']);
    }, err => {
      Swal.fire('Oops..', 'Something Went Wrong', 'error')
    });
  }
}
