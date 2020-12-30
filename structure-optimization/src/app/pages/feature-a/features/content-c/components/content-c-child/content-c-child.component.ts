import { ITodos } from './../../models/todos.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-c-child',
  templateUrl: './content-c-child.component.html',
  styleUrls: ['./content-c-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCChildComponent {
  @Input()
  todo: ITodos
}
