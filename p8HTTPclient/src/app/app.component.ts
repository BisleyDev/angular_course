import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo, TodosService } from './todos.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {

  constructor( private todosService: TodosService ) {}

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  errorMessage = '';

  ngOnInit() {
  }

  addTodo() {
    if ( this.todoTitle.trim().length < 2 ) { return null; }
    const newTodo: Todo = { completed: false, title: this.todoTitle };

    this.todosService.addTodo( newTodo )
      .subscribe( res => {
        this.todos.unshift( res );
      } );
    this.todoTitle = '';
  }

  fetchTodo() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe( resp => {
          this.todos = resp;
          this.loading = false;
        },
        ( error ) => {
          this.errorMessage = error.message;
          setTimeout( () => {this.errorMessage = ''; }, 5000 );
        }
      );

  }

  removeTodo( id: number ) {
    this.todosService.removeTodo( id )
      .subscribe(
        ( res ) => {
          this.todos = this.todos.filter( el => el.id !== id );
        },
        ( error ) => {
          this.errorMessage = error.message;
          setTimeout( () => {this.errorMessage = ''; }, 5000 );
        }
      );
  }

  completedTodo( id: number ) {
    this.todosService.completedTodo( id )
      .subscribe(
        ( res ) => {
          this.todos.find( el => el.id === id ).completed = true;
        },
        ( error ) => {
          this.errorMessage = error.message;
          setTimeout( () => {this.errorMessage = ''; }, 5000 );

        }
      );
  }
}

