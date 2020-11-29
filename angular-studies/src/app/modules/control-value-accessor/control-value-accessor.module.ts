import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { ControlValueAccessorRoutingModule } from './control-value-accessor-routing.module';
import { ControlValueAccessorContainerComponent } from './containers/control-value-accessor-container/control-value-accessor-container.component';
import { StarRaterComponent } from './components/star-rater/star-rater.component';


@NgModule({
  declarations: [ControlValueAccessorContainerComponent, StarRaterComponent],
  imports: [
    CommonModule,
    ControlValueAccessorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ]
})
export class ControlValueAccessorModule { }
