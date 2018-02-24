import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems: Array<any>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.todoService.getAll().subscribe(response => {
      this.todoItems = response
    });
  }

  toggle(todoitem: any): void {
    console.log('The ID is '+todoitem.id);
    //var myElement = angular.element( document.querySelector( '#some-id' ) );
    var el = document.getElementById('todoitem_'+todoitem.id);
    if(el){
      todoitem.active = !todoitem.active;

      this.todoService.update(todoitem.id, todoitem).subscribe(response => {
        // toggle CSS styles
        if(todoitem.active == true)
          el.setAttribute('class', 'active');
        else
          el.setAttribute('class', 'inactive');
      });
    }
  }

  delete(id: number): void {
    this.todoService.delete(id).subscribe(response => {
      this.getData();
    });
  }

}
