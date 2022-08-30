import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/upload-file/upload-file.module').then(
        (m) => m.UploadFileModule
      ),
  },
  {
    path: 'reactive-search',
    loadChildren: () =>
      import('./modules/reactive-search/reactive-search.module').then(
        (m) => m.ReactiveSearchModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
