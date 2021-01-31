import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSwitch]',
})
export class SwitchDirective {
  @Input('appSwitch') switchState: any;
}
