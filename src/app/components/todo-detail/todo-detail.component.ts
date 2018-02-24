import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoItem } from '../../todo-item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todoItem: TodoItem;
  success: boolean = false;
  error: string = null;
  loading: boolean = false;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private todoService: TodoService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.success = false;
    this.error = null;
    this.loading = true;

    this.todoService.get(id).subscribe(response => {
      console.log('-- RESPONSE --');
      console.log(response);
      this.todoItem = response;
      this.loading = false;
    }, err => {
      console.log('ERROR');
      console.log(err);
      this.error = err.message;
      this.loading = false;
    });
  }

  update(): void {
    console.log("-- update() --");
    console.log(this.todoItem);
    this.success = false;
    this.error = null;
    this.loading = true;

    this.todoService.update(this.todoItem.id, this.todoItem).subscribe(response => {
      this.loading = false;
      this.success = true;
    }, err => {
      console.log('ERROR');
      console.log(err);
      this.error = err.message;
      this.loading = false;
    });
  }

  cancel(): void {
    this.location.back();
  }
}
