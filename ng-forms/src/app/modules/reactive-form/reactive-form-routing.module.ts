import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormComponent } from './components/reactive-form.component';

const routes: Routes = [{ path: '', component: ReactiveFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormRoutingModule {}
