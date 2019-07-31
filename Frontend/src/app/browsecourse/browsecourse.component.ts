import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';
import { StoreService } from '../store.service';

/*
*  @description :: Type Script File of Browse Course Component.
*  @author      :: Nishant Bhambhani, B00823348
*/

@Component({
  selector: 'app-browsecourse',
  templateUrl: './browsecourse.component.html',
  styleUrls: ['./browsecourse.component.scss']
})
export class BrowsecourseComponent implements OnInit {

  result: any;
  courses = [];
  scourses = [];
  userName: string;
  keyword: string;

  constructor(private router: Router, private route: ActivatedRoute, private store: StoreService) {
    this.userName = sessionStorage.getItem("userName");
  }

  ngOnInit() {
    const param = new URLSearchParams(window.location.search);
    this.keyword = param.get("keyword");
    if (!this.keyword) {
      this.store.get('/getcourse').subscribe((res) => {
        this.result = res;
        var i: number;
        for (i = 0; i < this.result.length; i++) {
          this.courses[i] = { id: this.result[i].id, title: this.result[i].coursename, code: this.result[i].coursecode, school_code: "Dalhousie University", description: this.result[i].desc, sdate: this.result[i].startdate, edate: this.result[i].enddate, isEnrolled: this.result[i].isEnrolled }
        }
      }, err => {
        console.log(err);
      });

    }
  }

  // search course method will take the search keyword which is course name for now, then it will search the courses with the provided keyword.
  searchCourse(value: string) {
    this.keyword = value;
    if (this.keyword) {
      var sk = { coursename: this.keyword };
      console.log(sk);
      this.store.post('/searchcourse', sk).subscribe((res) => {
        this.result = res;
        var i: number;
        this.scourses = [];
        for (i = 0; i < this.result.length; i++) {
          this.scourses[i] = { id: this.result[i].id, title: this.result[i].coursename, code: this.result[i].coursecode, school_code: "Dalhousie University", description: this.result[i].desc, sdate: this.result[i].startdate, edate: this.result[i].enddate, isEnrolled: this.result[i].isEnrolled }
          console.log(this.scourses);
          this.courses = this.scourses;
        }
      }, err => {
      });
    } else {
      this.ngOnInit();
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

  // enroll method is invoked when the enroll button is clicked.
  // parameter ct is passed in function which will be the course to be enrolled.
  enroll(ct) {
    var cid = { coursename: ct };
    console.log(cid);
    this.store.post('/enroll', cid).subscribe((res) => {
      if (!this.keyword) {
        var response = res;
        console.log(response["message"]);
        if (response["message"] == "Successful") {
          this.ngOnInit();
          Swal.fire('Course Enrolled', 'Course Enrolled', 'success')

        } else {
          Swal.fire('Course Not Enrolled', response["message"], 'error')
        }
      } else {
        this.searchCourse(this.keyword);
        Swal.fire('Course Enrolled', 'Course Enrolled', 'success')
      }
    }, err => {
      Swal.fire('Oops..', 'Something Went Wrong', 'error')
    });
  }
}
