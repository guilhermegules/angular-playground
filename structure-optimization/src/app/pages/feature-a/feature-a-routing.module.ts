import { ContentBComponent } from './containers/content-b/content-b.component';
import { ContentAComponent } from './containers/content-a/content-a.component';
import { RootFeatureAComponent } from './components/root-feature-a/root-feature-a.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RootFeatureAComponent,
    children: [
      {
        path: '', component: ContentAComponent,
      },
      {
        path: 'b', component: ContentBComponent
      },
      {
        path: 'c',
        loadChildren: () => import('./features/content-c/content-c.module').then(m => m.ContentCModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule { }
