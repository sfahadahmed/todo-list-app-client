import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems: Array<any>;
  error: string = null;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.error = null;

    this.todoService.getAll().subscribe(response => {
      this.todoItems = response
    }, err => {
      console.log('ERROR');
      console.log(err);
      this.error = err.message;
    });
  }

  toggle(todoitem: any): void {
    console.log('The ID is '+todoitem.id);
    //var myElement = angular.element( document.querySelector( '#some-id' ) );
    var el = document.getElementById('todoitem_'+todoitem.id);
    if(el){
      todoitem.active = !todoitem.active;
      this.error = null;

      this.todoService.update(todoitem.id, todoitem).subscribe(response => {
        // toggle CSS styles
        if(todoitem.active == true)
          el.setAttribute('class', 'active');
        else
          el.setAttribute('class', 'inactive');
      }, err => {
        console.log('ERROR');
        console.log(err);
        this.error = err.message;
      });
    }
  }

  delete(id: number): void {
    this.error = null;

    this.todoService.delete(id).subscribe(response => {
      this.getData();
    }, err => {
      console.log('ERROR');
      console.log(err);
      this.error = err.message;
    });
  }

}
