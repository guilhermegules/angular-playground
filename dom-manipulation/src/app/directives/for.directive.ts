import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appFor]',
})
export class ForDirective implements OnInit {
  /**
   * Here we can define syntax sugar for our for loop with the final word on input definition
   * @Example  let item from list
   */
  @Input('appForFrom') list: string[];

  constructor(
    private template: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.list.forEach((item, index) => {
      this.viewContainerRef.createEmbeddedView(this.template, {
        $implicit: item,
        index,
      });
    });
  }
}
