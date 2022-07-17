import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

type InputFieldCallback = (value: string) => void;

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input()
  public cssClass: Record<string, boolean> = {};
  @Input()
  public id!: string;
  @Input()
  public label = '';
  @Input()
  public type = 'text';
  @Input()
  public isReadOnly = false;

  private innerValue = '';

  get value() {
    return this.innerValue;
  }

  set value(value: string) {
    if (value === this.innerValue) return;

    this.innerValue = value;
    this.onChangeCb(value);
  }

  public onChangeCb: InputFieldCallback = () => {};
  public onTouchedCb: InputFieldCallback = () => {};

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: InputFieldCallback): void {
    this.onChangeCb = fn;
  }

  public registerOnTouched(fn: InputFieldCallback): void {
    this.onTouchedCb = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }
}
