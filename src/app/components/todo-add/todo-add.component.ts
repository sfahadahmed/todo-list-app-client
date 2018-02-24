import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoItem } from '../../todo-item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {

  @Input() todoItem: TodoItem;

  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.todoItem = new TodoItem();
  }

  add(): void {
    console.log("-- add() --");
    console.log(this.todoItem);
    this.todoService.create(this.todoItem).subscribe(response => {
      this.location.back();
    });
  }

  cancel(): void {
    this.location.back();
  }
}
