import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations"

@Component({
  selector: 'app-square-animated',
  templateUrl: './square-animated.component.html',
  styleUrls: ['./square-animated.component.css'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        backgroundColor: 'green',
        transform: 'scale(1)',
      })),
      state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('* => state1', animate('300ms')),
      transition('* => state2', animate('2000ms'))
    ])
  ]
})
export class SquareAnimatedComponent implements OnInit {
  @Input() currentState: string;
  constructor() { }

  ngOnInit(): void {
  }

}
