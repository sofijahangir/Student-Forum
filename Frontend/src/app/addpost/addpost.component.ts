import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {
  newPostform: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store: StoreService) { 

  }

  submitForm()
  {
    if (this.newPostform.invalid) {
      Swal.fire('Oops..', 'Please enter required details', 'error')
      this.newPostform.reset();
    } else {
      console.log(this.newPostform.value);
      this.store.post('/addPost', this.newPostform.value).subscribe((res) => {
        this.router.navigate(['/discussions/add']);
        // this.isLoading = false;
      }, err => {
        console.log(err);
        // this.isLoading = false;
      });
    }
  }

  ngOnInit() {
    this.newPostform = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      allowAnon: false,
      course: ['', Validators.required],

    });
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
