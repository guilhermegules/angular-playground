import {
  Directive,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  private embedded: EmbeddedViewRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  @Input('appIf') set flag(value: boolean) {
    if (value) {
      this.embedded = this.viewContainerRef.createEmbeddedView(this.template);
    } else if (!!this.embedded) {
      this.embedded.destroy();
    }
  }
}
