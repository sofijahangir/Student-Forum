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
