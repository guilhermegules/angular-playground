import { CourseService } from './../services/course.service';
import { Course } from '../interfaces/course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  course: Course;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseService.retrieveById(
      +this.activatedRoute.snapshot.paramMap.get('id')
    ).subscribe({
      next: course => this.course = course,
      error: error => console.log('Error', error)
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: (course) => console.log('Saved with sucess', course),
      error: (error) => console.log('Error', error),
    });
  }
}
