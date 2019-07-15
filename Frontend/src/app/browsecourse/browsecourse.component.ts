import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-browsecourse',
  templateUrl: './browsecourse.component.html',
  styleUrls: ['./browsecourse.component.scss']
})
export class BrowsecourseComponent implements OnInit {

  result: any;
  // courses:[{}];
  courses = [];
  scourses = [];

  keyword: string;

  constructor(private router: Router, private route: ActivatedRoute, private store: StoreService) {
  }

  ngOnInit() {
    const param = new URLSearchParams(window.location.search);
    this.keyword = param.get("keyword");
    // console.log(this.keyword);
    if (!this.keyword) {
      this.store.get('/getcourse').subscribe((res) => {
        this.result = res;
        console.log((this.result));
        var i: number;
        for (i = 0; i < this.result.length; i++) {
          this.courses[i] = { id:this.result[i].id, title: this.result[i].coursename, code: this.result[i].coursecode, school_code: "Dalhousie University", description: this.result[i].desc, sdate: this.result[i].startdate, edate: this.result[i].enddate, isEnrolled: this.result[i].enroll }
          // console.log(this.courses[0]);
        }
        // this.courses = [{
        //   title: this.result[0].coursename,
        //   code: this.result[0].coursecode,
        //   school_code: "Dalhousie University",


        // }];

        // console.log(typeof(this.courses));


      }, err => {
        console.log(err);
      });

    }
    // this.searchCourse(this.keyword);






  }

  searchCourse(value: string) {
    // if(value){
    this.keyword = value;
    if (this.keyword) {
      var sk = { coursename: this.keyword };
      console.log(sk);
      this.store.post('/searchcourse', sk).subscribe((res) => {
        // console.log(res);
        this.result = res;
        // console.log((this.result));
        var i: number;
        this.scourses = [];
        for (i = 0; i < this.result.length; i++) {
          this.scourses[i] = {id:this.result[i].id,title: this.result[i].coursename, code: this.result[i].coursecode, school_code: "Dalhousie University", description: this.result[i].desc, sdate: this.result[i].startdate, edate: this.result[i].enddate, isEnrolled: this.result[i].enroll }
          //   // console.log(this.courses[0]);
          
        console.log(this.scourses);
        this.courses = this.scourses;
        // console.log(this.courses);


        }


      }, err => {
      });
      // console.log(this.courses);
    } else {
      this.ngOnInit();
      // console.log("Calling OnInit");
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

  enroll(ct) {
    var cid = { id: ct };
    console.log(cid);
    this.store.post('/enroll', cid).subscribe((res) => {
        if(!this.keyword){this.ngOnInit();
        // console.log(res);
        // this.result = res;
        // var i: number;
        // for (i = 0; i < this.result.length; i++) {
        //   this.courses[i] = { title: this.result[i].coursename, code: this.result[i].coursecode, school_code: "Dalhousie University", description: this.result[i].desc, sdate: this.result[i].startdate, edate: this.result[i].enddate, isEnrolled: this.result[i].enroll }
        // }
        // console.log(this.courses[0]);
        Swal.fire('Course Enrolled', 'Course Enrolled', 'success')
        } else {
          this.searchCourse(this.keyword);
          Swal.fire('Course Enrolled', 'Course Enrolled', 'success')
        }
      }, err => {
        Swal.fire('Oops..', 'Something Went Wrong', 'error')
      });



  }



  // courses = [{
  //   id: 1,
  //   title: "Data Management",
  //   code: "CSCI 1234",
  //   school_code: "Dalhousie University",
  //   prof: "Dr. Saurbh Dey",
  //   join_code: 6789
  // }, {
  //   id: 2,
  //   title: "Web Development",
  //   code: "CSCI 5709",
  //   prof: "Maria Gabriella Mosquera",
  //   school_code: "Dalhousie University",
  //   join_code: 7282,
  //   isEnrolled: true
  // }, {
  //   id: 3,
  //   title: "Cloud Computing",
  //   code: "CSC 8701",
  //   prof: "Dr. Peter Bodorik",
  //   school_code: "Saint Mary's University",
  //   join_code: 9281
  // }, {
  //   id: 4,
  //   title: "Software Development Concepts",
  //   code: "CSCI 5709",
  //   prof: "Dr. Michael",
  //   school_code: "Dalhousie University",
  //   join_code: 4536
  // }, {
  //   id: 5,
  //   title: "Mobile Computing",
  //   code: "CSC 9004",
  //   prof: "Dr. Hackett",
  //   school_code: "Saint Mary's University",
  //   join_code: 8362,
  //   isEnrolled: true
  // }, {
  //   id: 6,
  //   title: "Visual Analytics",
  //   code: "CSCI 5929",
  //   prof: "Dr. Fernado",
  //   school_code: "Concordia University",
  //   join_code: 9172
  // }];
}
