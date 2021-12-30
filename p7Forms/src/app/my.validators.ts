import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class MyValidators {

  static checkOnCloseEmail(control: FormControl): {[key: string]: boolean} {
   const  closeEmail: string[] = ['a@mail.com', 'b@mail.com', 'test@mail.com'];
   if (closeEmail.includes(control.value)) {
      return {checkOnCloseEmail: true};
    }
   return null;
  }

  static asyncCheckCloseEmail(control: FormControl): Promise<{[key: string]: boolean}> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.com') {
          resolve ({asyncCheckCloseEmail: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
