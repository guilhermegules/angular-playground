import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "animation-test";

  state:string = 'state1';

  changeState(state: string) {
    this.state = state;
  } 
}
