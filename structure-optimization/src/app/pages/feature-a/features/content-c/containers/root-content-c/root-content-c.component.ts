import { ITodos } from './../../models/todos.model';
import { ContentCService } from './../../services/content-c.service';
import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { ContentCChildComponent } from '../../components/content-c-child/content-c-child.component';

@Component({
  selector: 'app-root-content-c',
  templateUrl: './root-content-c.component.html',
  styleUrls: ['./root-content-c.component.scss']
})
export class RootContentCComponent implements DoCheck {
  @ViewChild(ContentCChildComponent, { static: false }) child: ContentCChildComponent;

  counter = 0;

  ngDoCheck() {
    if(!!this.child) {
      console.log(`Parent counter: ${this.counter}; Child counter: ${this.child.counter}`)
    }
  }
''
  handleIncrement() {
    this.counter++;
  }

  handleDecrement() {
    this.counter--;
  }
}
