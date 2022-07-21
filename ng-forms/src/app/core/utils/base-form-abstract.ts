import { FormGroup } from '@angular/forms';

export abstract class BaseFormAbstract {
  public form!: FormGroup;

  public abstract submit(): void;

  public onSubmit(): void {
    if (this.form.valid) {
      this.submit();
      return;
    }

    this.form.markAllAsTouched();
  }

  public checkValidityAndTouched(field: string): boolean {
    return (
      !!this.form.get(field)?.invalid &&
      (!!this.form.get(field)?.touched || !!this.form.get(field)?.dirty)
    );
  }

  public applyError(field: string): Record<string, boolean> {
    return {
      'has-error': this.checkValidityAndTouched(field),
      'has-feedback': this.checkValidityAndTouched(field),
    };
  }
}
