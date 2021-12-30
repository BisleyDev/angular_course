import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterseptor } from './auth.interseptor';

const VALUE_INTERSEPTOR: Provider = {
provide: HTTP_INTERCEPTORS,
  useClass: AuthInterseptor,
  multi: true
};

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [VALUE_INTERSEPTOR],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
