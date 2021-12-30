import {Component} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';

import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stream: Subscription;
  customSteam: Subscription;

  constructor() {
    // const intervalStream$ = interval(1000);
    // this.stream = intervalStream$
    //   .pipe(
    //     filter((el) => el % 3 === 0),
    //     map((el) => `Change value ${el}`)
    //   )
    //   .subscribe((value) => console.log(value));


    const custom$ = new Observable(subscriber => {
      setTimeout(() => (subscriber.next(1)), 500);

      setTimeout(() => (subscriber.next(2)), 1500);

      setTimeout(() => (subscriber.error('Error')), 1800);

      setTimeout(() => (subscriber.complete()), 3000);

      setTimeout(() => (subscriber.next(5)), 4500);


    });

    custom$.subscribe(
      next => console.log(next),
      error => console.log(error),
      () => console.log('complete')
    );
  }

  stop() {
    this.stream.unsubscribe();
  }
}

