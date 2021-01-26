import { Component } from '@angular/core';

import { UserContextService } from '../../../../shared/services/user-context.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(public userContext: UserContextService) { }
}
