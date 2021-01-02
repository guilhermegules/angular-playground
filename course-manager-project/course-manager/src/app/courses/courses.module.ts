import { StarModule } from './../shared/star/star.module';
import { PipeModule } from './../shared/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'courses',
    component: CourseListComponent,
  },
  {
    path: 'courses/info/:id',
    component: CourseInfoComponent
  },
];

@NgModule({
  declarations: [CourseInfoComponent, CourseListComponent],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    PipeModule,
    RouterModule.forChild(routes)
  ],
})
export class CoursesModule {}
