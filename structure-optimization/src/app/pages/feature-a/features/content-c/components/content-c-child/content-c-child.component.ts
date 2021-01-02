import { ITodos } from './../../models/todos.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-c-child',
  templateUrl: './content-c-child.component.html',
  styleUrls: ['./content-c-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCChildComponent {
  @Input()
  counter: number;

  @Output()
  increment: EventEmitter<number> = new EventEmitter();

  @Output()
  decrement: EventEmitter<number> = new EventEmitter();
}
