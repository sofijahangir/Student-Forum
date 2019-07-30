import { Component, OnInit } from '@angular/core';
import { routeAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})


export class AppComponent {
  readonly VAPID_PUBLIC_KEY = 'BHddeLLJNV7FYImxP8-1u_mvcGo6N70ZXCRW2UtZbeKiuwLlo5fyaFJR8BIr8gbWCnWqHJ7x7DrL98zS14ZJkew';

  constructor(private swpush: SwPush,
    private store: StoreService) {

    if (swpush.isEnabled) {
      this.subscribeToNotifications();
    }
  }


  subscribeToNotifications() {
    this.swpush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.sendToServer(sub))
      .catch(err => console.error(err));
  }

  sendToServer(params: any) {
    this.store.post('/notifications', { notification: params }).subscribe();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
