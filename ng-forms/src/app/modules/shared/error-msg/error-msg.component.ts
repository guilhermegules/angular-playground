import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { FormValidators } from '@core/validators/form.validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ErrorMsgComponent {
  @Input()
  public control!: FormControl;

  @Input()
  public label = '';

  get errorMessage() {
    for (const property in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(property) &&
        this.control.touched
      ) {
        return FormValidators.getErrorMessage(
          this.label,
          property,
          this.control.errors[property]
        );
      }
    }

    return null;
  }
}
