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
  public post=[];
  public discussion_comments = [];
  public comment = '';
  constructor(private router: Router, private store: StoreService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getDiscussionData();
    this.getComment();
  }
  getTime(time){
    return new Date(time);
  }
  getDiscussionData(){
    this.store.getDiscussions('/getDiscussions?filter=All&course=').subscribe((res) => {
      var length = Object.keys(res).length;
      for(var i=0;i<length;i++)
      {
        
        if(res[i].id == this.id){
          console.log(res[i]);
          this.post["title"] = res[i].title;
          this.post["author"] = res[i].email;
          this.post["time_stamp"] = new Date(res[i].createdAt);
          this.post["comments"] = res[i].messageCount;
          this.post["id"] = res[i].id;
          this.post["content"] = res[i].content;
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
  add(){
    if(this.comment !=""){
      var data = [];
      // data={data:{'postId': this.id,'content': this.comment,'email':"nn@gmail.com"}};
      // let comment = (<HTMLInputElement>document.getElementById('comment-input')).value;
      console.log(this.comment);
      this.store.sendComment("/newComents",this.comment,this.id,"nn@gmail.com").subscribe((res)=>{
        console.log(res);
      })
      var time =  new Date();
      this.discussion_comments.push({content:this.comment,email:"nn@gmail.com",createdAt:time})
      this.comment = '';
    }
  }
  getComment(){
    var that = this;
    this.store.getDiscussionWithID("/getDiscussions/",this.id).subscribe((res)=>{
      var length = Object.keys(res).length;
      for(var i=0;i<length;i++)
      {
        that.discussion_comments.push(res[i]);
      }
    })
  }
  addComment() {
    let userInput = (<HTMLInputElement>document.getElementById('comment-input')).value;
    if (userInput) {
      let commentWrapper = document.getElementById('discussion-comments');

      let comment = document.createElement('div');
      comment.setAttribute('class', 'comment py-3');

      let mediaDiv = document.createElement('div');
      mediaDiv.setAttribute('class', 'media');

      let mediaLeftDiv = document.createElement('div');
      mediaLeftDiv.setAttribute('class', 'media-left');

      let imgElement = document.createElement('img');
      imgElement.setAttribute('class', 'img-circle');
      imgElement.setAttribute('width', '25px');
      imgElement.setAttribute('height', '25px');

      let mediaBodyDiv = document.createElement('div');
      mediaBodyDiv.setAttribute('class', 'media-body pl-1');

      let colsmDiv = document.createElement('div');
      colsmDiv.setAttribute('class', 'col-sm');

      let mb2Div = document.createElement('div');
      mb2Div.setAttribute('class', 'mb-2');

      let name = document.createElement('h6');
      name.appendChild(document.createTextNode("Sharmila Thirumalainathan"));

      let commentData = document.createElement('p');
      commentData.appendChild(document.createTextNode(userInput));

      let commentTime = document.createElement('div');
      commentTime.setAttribute('class', 'discussion-period');
      commentTime.appendChild(document.createTextNode("21 June 2019, 12:45 PM"));

      mb2Div.appendChild(name);

      colsmDiv.appendChild(mb2Div);
      colsmDiv.appendChild(commentData);
      colsmDiv.appendChild(commentTime);

      mediaLeftDiv.appendChild(imgElement);

      mediaBodyDiv.appendChild(colsmDiv);

      mediaDiv.appendChild(mediaLeftDiv);
      mediaDiv.appendChild(mediaBodyDiv);

      comment.appendChild(mediaDiv);

      commentWrapper.appendChild(comment);
      (<HTMLInputElement>document.getElementById('comment-input')).value = '';
    } else {
      window.alert("Comment cannot be empty");
    }
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
