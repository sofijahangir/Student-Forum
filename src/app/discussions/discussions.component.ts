import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss']
})


export class DiscussionsComponent implements OnInit {
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
    title: "Software Development Concepts",
    code: "CSCI 5709",
    join_code: 4536
  }, {
    id: 5,
    title: "Mobile Computing",
    code: "CSCI 5609",
    join_code: 8362
  }, {
    id: 6,
    title: "Visual Analytics",
    code: "CSCI 5929",
    join_code: 9172
  }];

  posts = [{
    id: 1,
    title: "Google I/O Conference - 2019",
    author: "Michael Hackett",
    date: "April 30, 2019",
    comments: 24
  }, {
    id: 2,
    title: "REST API Architecture",
    author: "Michael Hackett",
    date: "May 7, 2019",
    comments: 6
  }, {
    id: 3,
    title: "Weekly Course Updates",
    author: "Gabriella Mosquera",
    date: "May 30, 2019",
    comments: 0,
    isInternal: true
  }, {
    id: 4,
    title: "Docker Setup Issue in Windows",
    author: "Aishwarya Naryanan",
    date: "May 30, 2019",
    comments: 12
  }, {
    id: 5,
    title: "Tutorial Session Poll",
    author: "Vishaali Srikanth",
    date: "May 30, 2019",
    comments: 0,
    isInternal: true
  }, {
    id: 6,
    title: "Massa placerat duis ultricies",
    author: "Michael Hackett",
    date: "April 31, 2019",
    comments: 0
  }];

  constructor() { }

  ngOnInit() {
  }

  collapse() {
    if (document.getElementById("wrapper").classList.contains("collapse")) {
      document.getElementById("wrapper").classList.remove("collapse");
    } else {
      document.getElementById("wrapper").classList.add("collapse");
    }
  }
}
