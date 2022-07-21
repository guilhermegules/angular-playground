import { ErrorMsgComponent } from './../error-msg/error-msg.component';
import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

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
  imports: [ReactiveFormsModule, CommonModule, FormsModule, ErrorMsgComponent],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input()
  set cssClass(className: Record<string, boolean>) {
    this.className = className;
  }

  @Input()
  public id!: string;

  @Input()
  public label = '';

  @Input()
  public type = 'text';

  @Input()
  public placeholder = '';

  @Input()
  public isReadOnly = false;

  @Input()
  public control!: FormControl;

  public className: Record<string, boolean> = {};

  public onChangeCb: InputFieldCallback = () => {};
  public onTouchedCb: InputFieldCallback = () => {};

  public writeValue(value: string): void {
    if (!this.control) return;

    this.control.setValue(value);
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
