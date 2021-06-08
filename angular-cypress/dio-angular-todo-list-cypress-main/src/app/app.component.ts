import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo.model";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "todolist";

  edited = false;
  mytodo = new Todo(0, "", false);
  mytodolist: Todo[];

  constructor(private dataservice: TodoService) {}

  onSubmit() {
    this.saveTodo(this.mytodo);

    // resetting the mytodo value
    this.mytodo = new Todo(0, "", false);
  }

  saveTodo(mytodo: Todo) {
    // if it is not an editing
    if (!this.edited) {
      if (this.mytodo.title == "") return;

      this.dataservice.createTodo(mytodo).subscribe(() => {
        this.displayTodoList();
      });
      return;
    }
    // if we are editing an existing todo
    this.edited = false;
    console.log("this is being edited", mytodo);

    // update existing todo
    this.dataservice.updateTodo(this.mytodo.id, this.mytodo).subscribe(() => {
      this.displayTodoList();
    });
  }

  ngOnInit() {
    this.displayTodoList();
  }

  // this function retrieves the whole array of todos from server, using api service injected
  displayTodoList() {
    this.dataservice.getTodoList().subscribe((data) => {
      // as the Web Api doesn't sort the list of todos, we do here in the frontend
      this.mytodolist = data.sort((a, b) => {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
      });

      console.log("display", this.mytodolist);
    });
  }

  // deleting an existing todo
  delete(id: number) {
    // without type info
    console.log("delete", id);
    this.dataservice.deleteTodo(id).subscribe((data) => {
      this.displayTodoList();
    });
  }

  // editing an existing todo
  edit(eid: number) {
    // without type info
    console.log("editing", eid);
    this.mytodo = this.mytodolist.filter((x) => x.id == eid)[0];
    this.edited = true;
  }

  // finalizing(crossing) an existing todo
  finishTodo(eid: number) {
    // without type info
    console.log("finishing", eid);
    const mytodofinished = this.mytodolist.filter((x) => x.id == eid)[0];
    mytodofinished.completed = !mytodofinished.completed;
    //calling the update observable
    this.dataservice.updateTodo(eid, mytodofinished).subscribe((data) => {
      this.displayTodoList();
    });
  }
}
