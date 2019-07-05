import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-discussiondetails',
  templateUrl: './discussiondetails.component.html',
  styleUrls: ['./discussiondetails.component.scss']
})
export class DiscussiondetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showButtons() {
    document.getElementById('comment-input').setAttribute('rows', '3');
    document.getElementById('add-comment-button-section').style.display = "block"
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

}
