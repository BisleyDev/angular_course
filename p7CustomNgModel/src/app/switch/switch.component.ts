import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const Value_ACCESSOR: Provider = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef( () => SwitchComponent )
};


@Component( {
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: [ './switch.component.scss' ],
  providers: [ Value_ACCESSOR ],
  styles: []
} )
export class SwitchComponent implements ControlValueAccessor {

  state = 'off';

  private onChange = (value: string) => {};

  setState( state: string ) {
    this.state = state;

    this.onChange(this.state);
  }

  registerOnChange( fn: any ): void {
    this.onChange = fn;
  }

  registerOnTouched( fn: any ): void {
  }

  writeValue( state: string ): void {
    this.state = state;
  }
}
