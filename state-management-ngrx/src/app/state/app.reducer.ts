import { Action, createReducer, on } from '@ngrx/store';

import { User } from '../shared/models/user.model';
import * as fromAppActions from './app.actions';

export interface AppState {
  user: User;
}

export const initiaState: AppState = {
  user: undefined,
};

const appStateReducer = createReducer(
  initiaState,
  on(fromAppActions.doLoginSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
);

export function reducer(state: AppState | undefined, action: Action): AppState {
  return appStateReducer(state, action);
}
