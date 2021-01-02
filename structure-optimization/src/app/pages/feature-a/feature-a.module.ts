import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { ContentAChildComponent } from './components/content-a-child/content-a-child.component';
import { ContentBFirstChildComponent } from './components/content-b-first-child/content-b-first-child.component';
import { ContentBSecondChildComponent } from './components/content-b-second-child/content-b-second-child.component';
import { RootFeatureAComponent } from './components/root-feature-a/root-feature-a.component';
import { ContentAComponent } from './containers/content-a/content-a.component';
import { ContentBComponent } from './containers/content-b/content-b.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';


@NgModule({
  declarations: [ContentAChildComponent, ContentBFirstChildComponent, ContentBSecondChildComponent, RootFeatureAComponent, ContentAComponent, ContentBComponent, SidebarComponent],
  imports: [
    CommonModule,
    FeatureARoutingModule,
  ]
})
export class FeatureAModule { }
