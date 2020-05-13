import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from './replacepipe.pipe';

@NgModule({
  declarations: [
    ReplacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReplacePipe
  ]
})
export class PipeModule { }
