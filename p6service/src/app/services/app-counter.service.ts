import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppCounterService {
  counter = 0;

  increases() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
