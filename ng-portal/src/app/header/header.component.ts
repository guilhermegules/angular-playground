import { AfterContentInit, Component, TemplateRef } from '@angular/core';
import { PortalService } from '../services/portal.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentInit {
  public template$: Observable<TemplateRef<unknown> | null> = of(null);

  constructor(private portalService: PortalService) {}

  public ngAfterContentInit(): void {
    this.template$ = this.portalService.template$;
  }
}
