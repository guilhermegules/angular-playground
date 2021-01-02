import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlValueAccessorContainerComponent } from './containers/control-value-accessor-container/control-value-accessor-container.component';

const routes: Routes = [
  {
    path: '',
    component: ControlValueAccessorContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlValueAccessorRoutingModule { }
