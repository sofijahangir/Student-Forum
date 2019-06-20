import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-browsecourse',
  templateUrl: './browsecourse.component.html',
  styleUrls: ['./browsecourse.component.scss']
})
export class BrowsecourseComponent implements OnInit {

  keyword: string;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const param = new URLSearchParams(window.location.search);
    this.keyword = param.get("keyword");
  }

  searchCourse(value: string) {
    this.keyword = value;
  }

  collapse() {
    if (document.getElementById("wrapper").classList.contains("collapse")) {
      document.getElementById("wrapper").classList.remove("collapse");
    } else {
      document.getElementById("wrapper").classList.add("collapse");
    }
  }

  courses = [{
    id: 1,
    title: "Data Management",
    code: "CSCI 1234",
    school_code: "Dalhousie University",
    prof: "Dr. Saurbh Dey",
    join_code: 6789
  }, {
    id: 2,
    title: "Web Development",
    code: "CSCI 5709",
    prof: "Maria Gabriella Mosquera",
    school_code: "Dalhousie University",
    join_code: 7282,
    isEnrolled: true
  }, {
    id: 3,
    title: "Cloud Computing",
    code: "CSC 8701",
    prof: "Dr. Peter Bodorik",
    school_code: "Saint Mary's University",
    join_code: 9281
  }, {
    id: 4,
    title: "Software Development Concepts",
    code: "CSCI 5709",
    prof: "Dr. Michael",
    school_code: "Dalhousie University",
    join_code: 4536
  }, {
    id: 5,
    title: "Mobile Computing",
    code: "CSC 9004",
    prof: "Dr. Hackett",
    school_code: "Saint Mary's University",
    join_code: 8362,
    isEnrolled: true
  }, {
    id: 6,
    title: "Visual Analytics",
    code: "CSCI 5929",
    prof: "Dr. Fernado",
    school_code: "Concordia University",
    join_code: 9172
  }];
}
