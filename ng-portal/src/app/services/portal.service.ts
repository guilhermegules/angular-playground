import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  private template = new BehaviorSubject<TemplateRef<unknown> | null>(null);

  get template$() {
    return this.template.asObservable();
  }

  addTemplate(templateRef: TemplateRef<unknown>) {
    this.template.next(templateRef);
  }
}
