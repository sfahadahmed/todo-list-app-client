import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  baseURL: string = 'http://localhost:8080/api/todoitems';

  constructor(private http: HttpClient) { }
  
    getAll(): Observable<any> {
      return this.http.get(this.baseURL);
    }

    get(id: number): Observable<any> {
      return this.http.get(this.baseURL+'/'+id);
    }

    create(todoItem: any): Observable<any> {
      return this.http.post(this.baseURL, todoItem);
    }

    update(id: number, todoItem: any): Observable<any> {
      return this.http.put(this.baseURL+'/'+id, todoItem);
    }

    delete(id: number): Observable<any> {
      return this.http.delete(this.baseURL+'/'+id);
    }
}
