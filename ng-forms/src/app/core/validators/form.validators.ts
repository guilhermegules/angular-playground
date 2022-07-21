import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidators {
  public static minCheckboxRequired(min = 1) {
    return (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map(({ value }) => value)
        .reduce((acc, current) => (current ? acc + current : acc), 0);
      return totalChecked >= min ? null : { required: true };
    };
  }

  public static cepValidator() {
    return (control: FormControl) => {
      const cep = control.value as string;

      if (!cep) return null;

      const cepValidate = /^[0-9]{8}$/;

      return cepValidate.test(cep) ? null : { invalidCep: true };
    };
  }

  public static equalsTo(otherField: string | null = null) {
    return (control: FormControl) => {
      if (otherField === null) {
        throw new Error('You must enter a other field.');
      }

      if (!control.root || !(control.root as FormGroup).controls) {
        return null;
      }

      const field = (control.root as FormGroup).get(otherField);

      if (!field) {
        throw new Error('You must enter a valid field.');
      }

      if (field.value !== control.value) {
        return { equalsTo: otherField };
      }

      return null;
    };
  }

  public static getErrorMessage(
    fieldName: string,
    validatorName: string,
    validatorValue?: any
  ) {
    const messages: Record<string, string> = {
      required: `${fieldName} is required.`,
      minlength: `${fieldName} need to have at least ${validatorValue.requiredLength} characters.`,
      maxlength: `${fieldName} need to have at most ${validatorValue.requiredLength} characters.`,
      invalidCep: 'Invalid CEP.',
      invalidEmail: 'E-mail already registered!',
      equalsTo: 'Fields are not the same',
      pattern: 'Invalid field.',
    };

    return messages[validatorName];
  }
}
