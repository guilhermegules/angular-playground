import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'templates',
        loadChildren: () => import('./modules/templates/templates.module').then((m) => m.TemplatesModule),
      },
      {
        path: 'form-validation',
        loadChildren: () => import('./modules/form-validation/form-validation.module').then(m => m.FormValidationModule),
      },
      {
        path: 'control-value-accessor',
        loadChildren: () => import('./modules/control-value-accessor/control-value-accessor.module').then(m => m.ControlValueAccessorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
