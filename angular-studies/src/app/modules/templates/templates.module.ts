import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { NgTemplateStudyComponent } from './components/ng-template-study/ng-template-study.component';
import { NgTemplateStudyContainerComponent } from './containers/ng-template-study-container/ng-template-study-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NgTemplateStudyComponent, NgTemplateStudyContainerComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    FormsModule
  ]
})
export class TemplatesModule { }
