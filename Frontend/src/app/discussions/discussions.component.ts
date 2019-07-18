// Module to fetch and display list of discussion related to the subjects user is enrolled in
//Created By Nirav Solanki

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { StoreService } from '../store.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss']
})


export class DiscussionsComponent implements OnInit {
  constructor(private router: Router, private store: StoreService) {

  }

  ngOnInit() {

    this.store.get('/getDiscussions?filter=All&course=',{}).subscribe((res) => {
      var length = Object.keys(res).length;
      for(var i=0;i<length;i++)
      {
        var post = {};    
        post["title"] = res[i].title;
        post["author"] = res[i].email;
        post["comments"] = res[i].messageCount;
        post["id"] = res[i].id;
        post["content"] = res[i].content;
        this.posts.push(post);
      }
    }, err => {
      console.log(err);
    });
  }

  goToDetails() {
    this.router.navigate(['/discussions/details']);
  }

  logout() {
    this.store.post('/signout').subscribe((res) => {
      this.router.navigate(['/home']);
    }, err => {
      Swal.fire('Oops..', 'Something Went Wrong', 'error')
    });
  }

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

  posts = [];

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
}
