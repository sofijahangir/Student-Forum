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
        post["createdAt"] = res[i].createdAt;
        this.timeArray.push(res[i].createdAt);
        this.messageArray.push(res[i].messageCount);
        var date = new Date(res[i].createdAt);
        var today = new Date();
        var difference = today.getDate()-date.getDate();
        if(difference==0)
        {
          var time = today.getHours() - date.getHours();
          if(time!=0)
          {
            post["createdAt"] = time + " Hours ago"
          }
          else
          {
            var minutes = today.getMinutes() - date.getMinutes();
            post["createdAt"] = minutes + " Minutes ago";
          }
        }
        this.posts.push(post);
      }
      console.log(this.posts);
    }, err => {
      console.log(err);
    });
  }

  goToDetails() {
    this.router.navigate(['/discussions/details']);
  }


  changeSorting(sortBy)
  {
    console.log(sortBy);
    if(sortBy=="Recent")
    {
      this.sortByTime();
    }
    else if(sortBy=="Active")
    {
      this.sortByMessage();
    }
  }

  sortByTime(){
    var len = this.timeArray.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if(this.timeArray[j]>this.timeArray[j+1])
        {
          var temp_t = this.timeArray[j];
          var temp = this.posts[j];
          this.timeArray[j] = this.timeArray[j+1];
          this.posts[j] = this.posts[j+1];
          this.timeArray[j+1] = temp_t;  
          this.posts[j+1] = temp;
        }
      }
    }
  }

  sortByMessage() {
    var len = this.messageArray.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if(this.messageArray[j]>this.messageArray[j+1])
        {
          var temp_t = this.messageArray[j];
          var temp = this.posts[j];
          this.messageArray[j] = this.messageArray[j+1];
          this.posts[j] = this.posts[j+1];
          this.messageArray[j+1] = temp_t;  
          this.posts[j+1] = temp;
        }
      }
    }
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
