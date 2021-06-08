import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "./todo.model";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  readonly apiURL = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  getTodoList(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(`${this.apiURL}/ToDoModels`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getTodo(id): Observable<Todo> {
    return this.http
      .get<Todo>(`${this.apiURL}/ToDoModels/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  createTodo(mytodo): Observable<Todo> {
    return this.http
      .post<Todo>(
        `${this.apiURL}/ToDoModels`,
        JSON.stringify(mytodo),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateTodo(id, mytodo): Observable<Todo> {
    console.log("trying to update", id, mytodo);
    return this.http
      .put<Todo>(
        `${this.apiURL}/ToDoModels/${id}`,
        JSON.stringify(mytodo),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteTodo(id) {
    return this.http
      .delete<Todo>(`${this.apiURL}/ToDoModels/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
