import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  todos: Todo[] =[];
  todo: Todo = new Todo();

  ngOnInit(): void {
    var getItem = localStorage.getItem('todos');

    if(getItem != null){
      this.todos = JSON.parse(getItem);
    }

  }

  addTask = (todo: Todo) =>{
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todo = new Todo();
  }

  deleteTask (row:any) {
    var index = this.todos.indexOf(row);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));

  };

  updateTask = (row: any) =>{
    var index = this.todos.indexOf(row);
    this.todos[index].tastStatus = false;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

}

