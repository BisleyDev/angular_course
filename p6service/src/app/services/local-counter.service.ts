import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class LocalCounterService {


  constructor( private logService: LogService) {
  }

  counter = 0;

  DoubleIncreases() {
    this.logService.log('DoubleIncreases');
    this.counter += 2;
  }

  DoubleDecrease() {
    this.logService.log('DoubleDecrease');
    this.counter -= 2;
  }
}
