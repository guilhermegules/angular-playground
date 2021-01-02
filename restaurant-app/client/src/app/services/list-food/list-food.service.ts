import { Item } from './../interfaces/item';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListFoodService {
  constructor(private http: HttpClient) {}

  getFoods(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:7000/items').pipe(
      map((data: Item[]) => {
        return data;
      }),
      catchError(() => {
        return throwError('Something when wrong!!!');
      })
    );
  }
}
