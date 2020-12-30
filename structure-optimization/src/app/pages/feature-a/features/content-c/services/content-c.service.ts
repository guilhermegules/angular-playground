import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ITodos } from './../models/todos.model';

@Injectable({
  providedIn: 'platform'
})
export class ContentCService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodos[]> {
    return this.http.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
