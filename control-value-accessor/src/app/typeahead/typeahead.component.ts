import { Component, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { autocomplete } from './typeahead.utils';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
})
export class TypeaheadComponent implements ControlValueAccessor {
  public disabled: boolean;
  public control = new FormControl(null);

  private onChange: (value: string) => void;
  private onTouched: () => void;

  // Optional decorator make ngControl a optional dependencie
  // Self decorators make the dependencies only inside this components, preventing Angular to search dependencies on Father Component
  constructor(@Optional() @Self() ngControl: NgControl) {
    ngControl.valueAccessor = this;

    setTimeout(() => ngControl.control.setValue('B'), 3000);
  }

  get filteredStates(): string[] {
    return !!this.control.value ? autocomplete(this.control.value) : [];
  }

  writeValue(value: string): void {
    console.log('writeValue', value);
    this.control.setValue(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onSelect(value: string) {
    this.onChange(value);
  }

  onFocus() {
    this.onTouched();
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
}
