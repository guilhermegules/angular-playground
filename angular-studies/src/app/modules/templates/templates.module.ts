import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { TemplatesRoutingModule } from './templates-routing.module';
import { NgTemplateStudyComponent } from './components/ng-template-study/ng-template-study.component';
import { NgTemplateStudyContainerComponent } from './containers/ng-template-study-container/ng-template-study-container.component';


@NgModule({
  declarations: [NgTemplateStudyComponent, NgTemplateStudyContainerComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    FormsModule,
    MatCardModule
  ]
})
export class TemplatesModule { }
