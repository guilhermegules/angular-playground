/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { getEntities, setEntities } from 'src/assets/db';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  getList(page: number): Observable<Todo[]> {
    const start = page * 10;

    return of(getEntities().slice(start, start + 10)).pipe(delay(2000));
  }

  toggleDone(id: number): Observable<Todo> {
    let todo: Todo;

    getEntities().forEach(item => {
      if (item.id === id) {
        todo = item;
        // eslint-disable-next-line no-param-reassign
        item.done = !item.done;
      }
    });

    return todo ? of(todo).pipe(delay(2000)) : throwError(`Todo id: ${id} not found.`);
  }

  create(todo: Partial<Todo>): Observable<Todo> {
    const id = getEntities()[0].id + 1;
    const createdAt = new Date();
    const entity: Todo = {
      id,
      createdAt,
      title: todo.title,
      done: false,
    };

    setEntities([entity, ...getEntities()]);

    return of(entity).pipe(delay(2000));
  }

  remove(id: number): Observable<boolean | never> {
    const { length } = getEntities();
    const filtered = getEntities().filter(item => item.id !== id);

    setEntities(filtered);

    return of('').pipe(
      delay(2000),
      // eslint-disable-next-line no-confusing-arrow
      mergeMap(() =>
        filtered.length === length ? throwError(`Todo com id: ${id} não existe.`) : of(true),
      ),
    );
  }
}
