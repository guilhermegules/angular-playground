import { createAction, props } from '@ngrx/store';
import { User } from '../shared/models/user.model';

// NgRx standart we use the context of the action trigger on [] and outside is the action itself
export const doLogin = createAction('[Login] Do Login', props<{ name: string; email: string }>());

export const doLoginSuccess = createAction('[API] Do Login Success', props<{ user: User }>());

export const doLoginFailure = createAction('[API] Do Login Failure');
