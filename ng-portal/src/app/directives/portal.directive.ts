import {
  AfterContentInit,
  Directive,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { PortalService } from '../services/portal.service';

@Directive({
  selector: '[appPortal]',
})
export class PortalDirective implements AfterContentInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private portalService: PortalService
  ) {}

  public ngAfterContentInit(): void {
    this.portalService.addTemplate(this.templateRef);
  }
}
