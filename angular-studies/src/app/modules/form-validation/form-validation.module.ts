import { ReactiveLoginFormComponent } from './components/reactive-login-form/reactive-login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsComponent } from './containers/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './containers/template-driven-form/template-driven-form.component';
import { FormValidationRoutingModule } from './form-validation-routing.module';


@NgModule({
  declarations: [TemplateDrivenFormComponent, ReactiveFormsComponent, ReactiveLoginFormComponent],
  imports: [
    CommonModule,
    FormValidationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class FormValidationModule { }
