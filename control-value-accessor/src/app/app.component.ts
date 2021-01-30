import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public form = new FormGroup({
    search: new FormControl({ value: '', disabled: false }),
  });

  constructor() {
    setTimeout(() => {
      // Set value on Father component will reflect on child
      this.form.controls['search'].setValue('A');
    }, 2000);
  }

  get search(): string {
    return this.form.value.search;
  }

  get isSearchTouched(): boolean {
    return this.form.controls['search'].touched;
  }
}
