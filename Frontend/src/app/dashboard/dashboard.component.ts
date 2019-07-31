import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StoreService } from '../store.service';
import Swal from 'sweetalert2';
import { SwPush } from '@angular/service-worker';
import { WebWorkerService } from 'ngx-web-worker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [WebWorkerService]

})


export class DashboardComponent implements OnInit {
  userName: string;
  sub: any;

  readonly VAPID_PUBLIC_KEY = 'BHddeLLJNV7FYImxP8-1u_mvcGo6N70ZXCRW2UtZbeKiuwLlo5fyaFJR8BIr8gbWCnWqHJ7x7DrL98zS14ZJkew';

  constructor(private router: Router, private store: StoreService, private _webWorkerService: WebWorkerService, private swpush: SwPush) {
    if (swpush.isEnabled) {
      this.subscribeToNotifications()
    }
  }

  subscribeToNotifications() {
    this.swpush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        this.sub = sub;
        console.log("sub", this.sub);
        this.sendToServer(this.sub);
      })
      .catch(err => console.error(err));
  }

  sendToServer(params: any) {
    var email = sessionStorage.getItem("email");
    this.store.post('/notifications', { notification: params, email: email }).subscribe(sub => {
      setTimeout(() => {
        this.subscribeToNotifications();
      }, 4000)
    });
  }

  ngOnInit() {
    this.store.get('/user').subscribe((res) => {
      if (res) {
        this.userName = res[0].name;
        sessionStorage.setItem("userName", res[0].name);
      }

    }, err => {
      console.log(err);
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
