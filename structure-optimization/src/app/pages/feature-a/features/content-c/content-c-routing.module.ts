import { ContentCService } from './services/content-c.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootContentCComponent } from './containers/root-content-c/root-content-c.component';

const routes: Routes = [
  {
    path: '', component: RootContentCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ContentCService]
})
export class ContentCRoutingModule { }
