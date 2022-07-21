import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './components/reactive-form.component';

import { DebugFormModule } from '@modules/shared/debug-form/debug-form.module';
import { InputFieldComponent } from '@modules/shared/input-field/input-field.component';
import { FormContainerComponent } from './containers/form-container/form-container.component';

@NgModule({
  declarations: [ReactiveFormComponent, FormContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
    DebugFormModule,
    FormsModule,
    InputFieldComponent,
  ],
})
export class ReactiveFormModule {}
