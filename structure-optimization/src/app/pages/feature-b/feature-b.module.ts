import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { RootFeatureBComponent } from './containers/root-feature-b/root-feature-b.component';


@NgModule({
  declarations: [RootFeatureBComponent],
  imports: [
    CommonModule,
    FeatureBRoutingModule
  ]
})
export class FeatureBModule { }
