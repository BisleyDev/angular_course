import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { delay, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Todo {
  title: string;
  completed: boolean;
  id?: number;
}

@Injectable( { providedIn: 'root' } )
export class TodosService {

  constructor( private http: HttpClient ) {}

  addTodo( newTodo: Todo ): Observable<Todo> {
    const headers = new HttpHeaders( {
      randomNumber: Math.random().toString(),
      name: 'Andriis'
    } );
    return this.http.post<Todo>( 'https://jsonplaceholder.typicode.com/posts', newTodo, {
      headers
    } );

  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append( '_limit', '3' );
    params = params.append( 'bla', '12345' );

    return this.http.get<Todo[]>( 'https://jsonplaceholder.typicode.com/posts', {
      params,
      // observe: 'body' //default value
      observe: 'response'
    } )
      .pipe(
        map( response => {
          // console.log( response );
          return response.body;
        } ),
        delay( 1500 ) );
  }

  removeTodo( id: number ): Observable<any> {
    return this.http.delete<void>( 'https://jsonplaceholder.typicode.com/posts/' + id, {
      observe: 'events'  // позволяет отследить стадии запроса
    } ).pipe(
      tap( response => {    // используется для промежуточного просмотра (не меняет респонсе)
        if ( response.type === HttpEventType.Sent ) {
          // console.log( 'Sent ', response );
        }
        if ( response.type === HttpEventType.Response ) {
          // console.log( 'Response ', response );
        }
      } ) );
  }

  completedTodo( id: number ): Observable<Todo> {
    const body = { completed: true };
    return this.http.put<Todo>( 'https://jsonplaceholder.typicode.com/posts/' + id, body, {
      responseType: 'json' // default param
    } );
  }
}
