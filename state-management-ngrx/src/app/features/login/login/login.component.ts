import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/shared/services/login.service';
import { UserContextService } from 'src/app/shared/services/user-context.service';
import { AppState } from 'src/app/state/app.reducer';
import * as fromAppActions from '../../../state/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public login() {
    this.store.dispatch(fromAppActions.doLogin(this.form.value));
  }

  private initForm() {
    this.form = this.fb.group({
        name: [null],
        email: [null],
    })
  }
}
