import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StoreService } from '../store.service';
import Swal from 'sweetalert2';
import { SwPush } from '@angular/service-worker';
import { WebWorkerService } from 'ngx-web-worker';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private router: Router, private store: StoreService, private _webWorkerService: WebWorkerService, private swpush: SwPush, private _DomSanitizationService: DomSanitizer) {
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


      this.store.post('/getDashboardCourses').subscribe((res) => {
        var length = Object.keys(res).length;
        for (var i = 0; i < length; i++) {
          var course = {};
          course["title"] = res[i].coursename;
          course["code"] = res[i].coursecode;
          if (res[i].image == "") {
            var im = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16b06d0c713%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16b06d0c713%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2360636b%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
            course["image"] = this._DomSanitizationService.bypassSecurityTrustUrl(im);
          }
          else {
            im = "data:image/png;base64," + res[i].image;
            course["image"] = this._DomSanitizationService.bypassSecurityTrustUrl(im);
          }
          this.courses.push(course);
        }
      }, err => {
        console.log(err);
      });

    });
  }

  courses = [];

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

  viewDiscussions(value: string) {
    this.router.navigate(['/discussions'], { queryParams: { course: value } });
  }
}
