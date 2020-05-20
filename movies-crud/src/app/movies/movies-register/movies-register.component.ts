import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies-register',
  templateUrl: './movies-register.component.html',
  styleUrls: ['./movies-register.component.scss'],
})
export class MoviesRegisterComponent implements OnInit {
  register: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      img: ['', [Validators.minLength(10)]],
    });
  }
}
