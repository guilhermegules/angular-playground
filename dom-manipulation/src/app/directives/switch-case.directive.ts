import {
  Directive,
  DoCheck,
  Host,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { SwitchDirective } from './switch.directive';

@Directive({
  selector: '[appSwitchCase]',
})
export class SwitchCaseDirective implements DoCheck {
  @Input('appSwitchCase') caseValue: any;

  constructor(
    @Host() private appSwitch: SwitchDirective,
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngDoCheck() {
    if (this.appSwitch.switchState === this.caseValue) {
      this.viewContainerRef.createEmbeddedView(this.template);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
