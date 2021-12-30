import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',
        [
        Validators.email,
        Validators.required,
        MyValidators.checkOnCloseEmail
      ],
        [MyValidators.asyncCheckCloseEmail]),
      password: new FormControl('', [Validators.minLength(5), Validators.required]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Kyiv', Validators.required)
      }),
      skills: new FormArray([])
    });
  }


  submitForm() {
    if (this.form.invalid) {
      const value = this.form.value;
      console.log(value);
    }
    console.log(this.form);
    this.form.reset();
  }

  setCapital() {
    const capitalMap = {
      ru: 'Moscow',
      ua: 'Kyiv',
      by: 'Minsk'
    };

    const country = this.form.get('address').get('country').value;
    this.form.patchValue({address: {city: capitalMap[country]}});
  }

  setSkills() {
    const skill = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(skill);
  }
}

