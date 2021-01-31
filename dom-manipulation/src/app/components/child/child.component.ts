import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() info: TemplateRef<any>;
  @Input() list: string[];

  func(item: string) {
    console.log(item);
  }
}
