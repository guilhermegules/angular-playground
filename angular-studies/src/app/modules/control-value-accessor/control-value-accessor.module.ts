import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { ControlValueAccessorRoutingModule } from './control-value-accessor-routing.module';
import { ControlValueAccessorContainerComponent } from './containers/control-value-accessor-container/control-value-accessor-container.component';
import { StarRaterComponent } from './components/star-rater/star-rater.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';


@NgModule({
  declarations: [ControlValueAccessorContainerComponent, StarRaterComponent, TypeaheadComponent],
  imports: [
    CommonModule,
    ControlValueAccessorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    TypeaheadModule.forRoot()
  ]
})
export class ControlValueAccessorModule { }
