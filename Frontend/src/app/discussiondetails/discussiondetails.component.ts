
/*
*  @description :: Endpoints To Evaluate Comments.
*  @author      :: Fasuyi Jesuseyi Will, B00787413
*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-discussiondetails',
  templateUrl: './discussiondetails.component.html',
  styleUrls: ['./discussiondetails.component.scss']
})
export class DiscussiondetailsComponent implements OnInit {

  public id;
  public post = [];
  public discussion_comments = [];
  public comment = '';
  public isannonymous = false;
  userName: string;
  allowAnon: any;

  constructor(private router: Router, private store: StoreService, private route: ActivatedRoute) {
    this.userName = sessionStorage.getItem("userName");
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getDiscussionData();
    this.getComment();
  }
  getTime(time) {
    return new Date(time);
  }
  getDiscussionData() {
    this.store.get('/getDiscussions?filter=All&course=').subscribe((res) => {
      var length = Object.keys(res).length;
      for (var i = 0; i < length; i++) {

        if (res[i].id == this.id) {
          console.log(res[i]);
          this.post["title"] = res[i].title;
          this.allowAnon = res[i].allowAnon;
          this.store.get('/user?email=' + res[i].email).subscribe((user) => {
            this.post["author"] = user[0].name;
          }, err => {
            console.log(err);
          });


          this.post["time_stamp"] = new Date(res[i].createdAt);
          this.post["comments"] = res[i].messageCount;
          this.post["id"] = res[i].id;
          this.post["content"] = res[i].content;
          this.post["course"] = res[i].course;
        }
      }
    }, err => {
      console.log(err);
    });
  }

  showButtons() {
    document.getElementById('comment-input').setAttribute('rows', '3');
    document.getElementById('add-comment-button-section').style.display = "block"
  }

  // add(){
  //   if(this.comment !=""){
  //     var data = [];
  //     // data={data:{'postId': this.id,'content': this.comment,'email':"nn@gmail.com"}};
  //     // let comment = (<HTMLInputElement>document.getElementById('comment-input')).value;
  //     console.log(this.comment);
  //     this.store.sendComment("/newComents",this.comment,this.id,"nn@gmail.com").subscribe((res)=>{
  //       console.log(res);
  //     })
  //     var time =  new Date();
  //     this.discussion_comments.push({content:this.comment,email:"nn@gmail.com",createdAt:time})
  //     this.comment = '';
  //   }
  // }

  add() {
    if (this.comment != "") {
      var data = { content: this.comment, postId: this.id, isannonymous: this.isannonymous };
      // data={data:{'postId': this.id,'content': this.comment,'email':"nn@gmail.com"}};
      // let comment = (<HTMLInputElement>document.getElementById('comment-input')).value;
      console.log(this.comment);
      this.store.post("/newComents", data).subscribe((res) => {
        console.log(res);
      })
      var time = new Date();
      var user_email = sessionStorage.getItem("email");
      this.discussion_comments.push({ content: this.comment, email: user_email, createdAt: time, isannonymous: this.isannonymous })
      this.isannonymous = false;
      this.comment = '';
    }

  }

  addannonymously() {
    this.isannonymous = true;
    this.add();
  }

  // getComment(){
  //   var that = this;
  //   this.store.getDiscussionWithID("/getDiscussions/",this.id).subscribe((res)=>{
  //     var length = Object.keys(res).length;
  //     for(var i=0;i<length;i++)
  //     {
  //       console.log(res);
  //       that.discussion_comments.push(res[i]);
  //     }
  //   })
  // }


  getComment() {
    var that = this;
    var surl = "/getDiscussions/" + this.id
    this.store.get(surl).subscribe((res) => {
      var length = Object.keys(res).length;
      for (var i = 0; i < length; i++) {
        that.discussion_comments.push(res[i]);
      }
    })
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
