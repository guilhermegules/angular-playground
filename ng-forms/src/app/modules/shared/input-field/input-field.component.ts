import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

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

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(value: any) {
    if (value === this.innerValue) return;

    this.innerValue = value;
    this.onChangeCb(value);
  }

  public onChangeCb: (_: any) => void = () => {};
  public onTouchedCb: (_: any) => void = () => {};

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }
}
