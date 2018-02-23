import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { TodoService } from './services/todo.service';
import { TodoAddComponent } from './components/todo-add/todo-add.component'


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
