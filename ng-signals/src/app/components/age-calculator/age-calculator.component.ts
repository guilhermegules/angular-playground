import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss'],
})
export class AgeCalculatorComponent {
  public form = this.fb.group({
    day: ['', [this.dayValidator()]],
    month: ['', [this.monthValidator()]],
    year: '',
  });

  public day = toSignal(this.form.get('day')!.valueChanges, {
    initialValue: '',
  });

  public month = toSignal(this.form.get('month')!.valueChanges, {
    initialValue: '',
  });

  public year = toSignal(this.form.get('year')!.valueChanges, {
    initialValue: '',
  });

  public age = computed(() => {
    const age = Math.floor(this.ageCalculation(this.TODAY, this.birthDate()));
    return Number.isNaN(age) ? '--' : age;
  });

  public monthsAge = computed(() => {
    const months = this.monthsCalculationByAge(
      this.ageCalculation(this.TODAY, this.birthDate())
    );
    return Number.isNaN(months) ? '--' : months;
  });

  public daysAge = computed(() => {
    const days = Math.floor(
      this.daysCalculationByAge(
        this.ageCalculation(this.TODAY, this.birthDate())
      )
    );
    return Number.isNaN(days) ? '--' : days;
  });

  private birthDate = computed(
    () =>
      new Date(
        `${this.year()}-${
          Number(this.month()) < 10 && this.month().length === 1
            ? `0${this.month()}`
            : this.month()
        }-${
          Number(this.day()) < 10 && this.day().length === 1
            ? `0${this.day()}`
            : this.day()
        }`
      )
  );

  private readonly DAYS = 365.25;
  private readonly MS_PER_YEAR = this.DAYS * 24 * 60 * 60 * 1000;
  private readonly TODAY = new Date();
  private readonly MONTHS = 12;

  constructor(private fb: NonNullableFormBuilder) {}

  public hasError(field: string): boolean {
    return !!this.form.get(field)?.errors;
  }

  public getErrorMessage(error: ValidationErrors | null): string {
    if (!error) return '';

    if (error['invalidMonth']) {
      return 'Invalid Month, insert a value between 1 - 12';
    }

    if (error['invalidDay']) {
      return 'Invalid day, insert a value between 1 - 365';
    }

    return '';
  }

  private monthsCalculationByAge = (age: number) =>
    Math.floor((age % 1) * this.MONTHS);

  private ageCalculation = (today: Date, birthDate: Date) =>
    (today.getTime() - birthDate.getTime()) / this.MS_PER_YEAR;

  private daysCalculationByAge = (age: number) =>
    (((this.ageCalculation(this.TODAY, this.birthDate()) % 1) * this.MONTHS) %
      1) *
    (this.DAYS / this.MONTHS);

  private monthValidator(): ValidatorFn {
    return (control) => {
      if (!control.value) return null;

      return Number(control.value) > 12 || Number(control.value) < 1
        ? { invalidMonth: true }
        : null;
    };
  }

  private dayValidator(): ValidatorFn {
    return (control) => {
      if (!control.value) return null;

      return Number(control.value) > 365 || Number(control.value) < 1
        ? { invalidDay: true }
        : null;
    };
  }
}
