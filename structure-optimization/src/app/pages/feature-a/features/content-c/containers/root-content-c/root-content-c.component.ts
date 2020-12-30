import { ITodos } from './../../models/todos.model';
import { ContentCService } from './../../services/content-c.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-content-c',
  templateUrl: './root-content-c.component.html',
  styleUrls: ['./root-content-c.component.scss']
})
export class RootContentCComponent implements OnInit {
  todos: ITodos[];

  constructor(private contentCService: ContentCService) { }

  ngOnInit(): void {
    this.contentCService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }
}
