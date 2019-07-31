import { Component, OnInit } from '@angular/core';
import { routeAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
import { StoreService } from './store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation],
})


export class AppComponent {

  constructor() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
