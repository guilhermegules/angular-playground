import { ReactiveFormsComponent } from './containers/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './containers/template-driven-form/template-driven-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'template',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule { }
