import { Attempt } from '../../../../shared/models/attempt.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss']
})
export class AttemptsComponent implements OnInit, OnChanges {
  @Input()
  private attemptsNumber: number;
  public attempts: Attempt[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < this.attemptsNumber; index++) {
      this.attempts.push(new Attempt(true));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.attemptsNumber.firstChange) {
      const index = this.attempts.length - changes.attemptsNumber.currentValue;
      this.attempts[index - 1].isFull = false;
    }
  }
}
