import { CourseService } from './../services/course.service';
import { Course } from './../interfaces/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];
  courses: Course[] = [];
  filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retriveAll().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error: (error) => console.log('Error', error),
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: (err) => console.log('Error', err),
    });
  }

  set filter(value: string) {
    this.filterBy = value;

    this.filteredCourses = this.courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this.filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this.filterBy;
  }
}
