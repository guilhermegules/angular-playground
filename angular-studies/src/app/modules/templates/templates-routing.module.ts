import { NgTemplateStudyContainerComponent } from './containers/ng-template-study-container/ng-template-study-container.component';
import { NgTemplateStudyComponent } from './components/ng-template-study/ng-template-study.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: NgTemplateStudyContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
