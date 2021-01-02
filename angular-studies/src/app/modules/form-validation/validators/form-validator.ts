import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ageRangeValidator(min = 0, max = 120): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
      return {
        ageRange: true
      }
    }

    return null
  }
}
