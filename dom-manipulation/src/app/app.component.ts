import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  flag: boolean;
  list = ['A', 'B', 'C'];
  value: 'A' | 'B' = 'A';

  onClick() {
    this.flag = !this.flag;
  }

  toggle() {
    this.value = this.value === 'A' ? 'B' : 'A';
  }
}
