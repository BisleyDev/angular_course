import { Component } from '@angular/core';
import { Observable } from "rxjs";

export interface Post {
	title: string
	text: string
}

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
	
	posts: Post[] = [
		{title: "Python", text: "first language"},
		{title: "Java", text: "second language"},
		{title: "JavaScript", text: "the best language"},
	]
	search: string = ''
	searchField: string = 'title'
	
	promise: Promise<Date> = new Promise<Date>(resolve => setInterval(() => (resolve(new Date)), 4000))
	
	date$: Observable<Date> = new Observable<Date>(obs => {
		setInterval(() => {
			obs.next(new Date())
		}, 1000)
	})
	
	num = 22224.555555555;
	str = 'hello world!'
	date: Date = new Date()
	float = 0.425
	obj = {
		a: 1,
		b: {
			a: 42,
			b: 41,
			c: [1, 2, 3]
		}
	}
	
}
