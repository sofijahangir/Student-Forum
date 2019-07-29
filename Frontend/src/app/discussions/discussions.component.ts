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

    this.store.get('/getDiscussions?filter=All&course=', {}).subscribe((res) => {
      var length = Object.keys(res).length;

      for (var i = 0; i < length; i++) {
        var post = {};
        post["title"] = res[i].title;
        post["author"] = res[i].email;
        post["comments"] = res[i].messageCount;
        post["id"] = res[i].id;
        post["content"] = res[i].content;
        post["createdAt"] = res[i].createdAt;
        this.timeArray.push(res[i].createdAt);
        this.messageArray.push(res[i].messageCount);
        this.courses.push(res[i].course.toLowerCase());
        var date = new Date(res[i].createdAt);
        var today = new Date();
        var difference = today.getDate() - date.getDate();
        if (difference == 0) {
          var time = today.getHours() - date.getHours();
          if (time != 0) {
            post["createdAt"] = time + " Hours ago"
          }
          else {
            var minutes = today.getMinutes() - date.getMinutes();
            post["createdAt"] = minutes + " Minutes ago";
          }
        }
        this.posts.push(post);
        this.allPosts = this.posts;
      }
    }, err => {
      console.log(err);
    });
  }

  changeSorting(sortBy) {
    console.log(sortBy);
    if (sortBy == "Recent") {
      this.sortByTime();
    }
    else if (sortBy == "Active") {
      this.sortByMessage();
    }
  }

  filterByCourse(value: string) {
    var len = this.courses.length;
    value = value.toLowerCase();
    var temp = [];
    for (var i = 0; i < len; i++) {
      if (this.courses[i].includes(value)) {
        temp.push(this.allPosts[i]);
      }
    }
    this.posts = temp;
  }

  sortByTime() {
    var len = this.timeArray.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (this.timeArray[j] > this.timeArray[j + 1]) {
          var temp_t = this.timeArray[j];
          var temp = this.posts[j];
          this.timeArray[j] = this.timeArray[j + 1];
          this.posts[j] = this.posts[j + 1];
          this.timeArray[j + 1] = temp_t;
          this.posts[j + 1] = temp;
        }
      }
    }
  }

  sortByMessage() {
    var len = this.messageArray.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (this.messageArray[j] > this.messageArray[j + 1]) {
          var temp_t = this.messageArray[j];
          var temp = this.posts[j];
          this.messageArray[j] = this.messageArray[j + 1];
          this.posts[j] = this.posts[j + 1];
          this.messageArray[j + 1] = temp_t;
          this.posts[j + 1] = temp;
        }
      }
    }

    goToDetails(id) {
      /*
      *  @description :: Endpoints To Evaluate Comments.
      *  @author      :: Fasuyi Jesuseyi Will, B00787413
      */
      this.router.navigate(['/discussions/details'], id);
    }

    logout() {
      this.store.post('/signout').subscribe((res) => {
        this.router.navigate(['/home']);
      }, err => {
        Swal.fire('Oops..', 'Something Went Wrong', 'error')
      });
    }

    posts = [];
    messageArray = [];
    timeArray = [];
    allPosts = [];
    courses = [];

    searchCourse(value: string) {
      if (!value) {
        this.posts = this.allPosts;
      }
      else {
        this.filterByCourse(value);
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
