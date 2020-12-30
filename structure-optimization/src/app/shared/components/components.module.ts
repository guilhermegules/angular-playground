import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSharedComponent } from './first-shared/first-shared.component';



@NgModule({
  declarations: [FirstSharedComponent],
  imports: [
    CommonModule
  ],
  exports: [FirstSharedComponent]
})
export class ComponentsModule { }
