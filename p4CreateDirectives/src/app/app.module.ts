import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from "./directive/style.directive";
import { NotIfDirective } from "./directive/notIf.directive";

@NgModule( {
	declarations: [
		AppComponent,
		StyleDirective,
		NotIfDirective
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
