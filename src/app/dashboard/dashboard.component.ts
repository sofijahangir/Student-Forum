import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  courses = [{
    id: 1,
    title: "Data Management",
    code: "CSCI 1234",
    join_code: 6789
  }, {
    id: 2,
    title: "Web Development",
    code: "CSCI 5709",
    join_code: 7282
  }, {
    id: 3,
    title: "Cloud Computing",
    code: "CSCI 5701",
    join_code: 9281
  }, {
    id: 4,
    title: "Web Development",
    code: "CSCI 5709",
    join_code: 7282
  }];

  constructor() { }

  ngOnInit() {
  }

  test() {
    if (document.getElementById("wrapper").classList.contains("collapse")) {
      document.getElementById("wrapper").classList.remove("collapse");
    } else {
      document.getElementById("wrapper").classList.add("collapse");
    }
  }
}
