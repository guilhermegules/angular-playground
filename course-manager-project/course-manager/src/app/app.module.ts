import { StarModule } from './shared/star/star.module';
import { CourseInfoComponent } from './courses/course-info/course-info.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './core/component/error/error.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
  {
    path: 'courses',
    component: CourseListComponent,
  },
  {
    path: 'courses/info/:id',
    component: CourseInfoComponent,
  },
];

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoursesModule,
    CoreModule,
    HttpClientModule,
    StarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
