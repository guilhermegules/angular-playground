import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ageRangeValidator } from '../../validators/form-validator';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.scss']
})
export class ReactiveLoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.maxLength(16), Validators.minLength(3)]],
      age: [null, [ageRangeValidator(16, 80)]],
    })
  }

}
