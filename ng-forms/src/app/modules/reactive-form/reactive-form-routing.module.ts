import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormContainerComponent } from './containers/form-container/form-container.component';

const routes: Routes = [{ path: '', component: FormContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormRoutingModule {}
