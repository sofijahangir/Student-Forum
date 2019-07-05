import {
  trigger,
  animate,
  transition,
  style,
  query,
  animateChild,
  group
} from '@angular/animations';

export const routeAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> LoginPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({ opacity: 1 })
      ]),

      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    transition('DashboardPage <=> DiscussionsPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({ opacity: 1 })
      ]),

      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    transition('LoginPage <=> DashboardPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({ opacity: 1 })
      ]),

      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    transition('DiscussionsPage <=> HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({ opacity: 1 })
      ]),

      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    transition('DashboardPage <=> HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({ opacity: 1 })
      ]),

      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
