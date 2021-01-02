import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContentCRoutingModule } from './content-c-routing.module';
import { ContentCChildComponent } from './components/content-c-child/content-c-child.component';
import { RootContentCComponent } from './containers/root-content-c/root-content-c.component';


@NgModule({
  declarations: [RootContentCComponent, ContentCChildComponent],
  imports: [
    CommonModule,
    ContentCRoutingModule,
    HttpClientModule
  ]
})
export class ContentCModule { }
