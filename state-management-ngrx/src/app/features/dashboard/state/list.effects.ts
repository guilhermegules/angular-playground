import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { TodosService } from 'src/app/shared/services/todos.service';
import { AppState } from 'src/app/state/app.reducer';

import * as fromListActions from './list.actions';
import * as fromListSelectors from './list.selectors';

@Injectable()
export class ListEffects {
  public loadList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromListActions.loadListFromLastTodos,
        fromListActions.loadListFromList,
        fromListActions.loadMore,
      ),
      // withLatestFrom combine the source Observable ^ with other observable we pass to him
      withLatestFrom(
        this.store.pipe(select(fromListSelectors.selectListEntities)),
        this.store.pipe(select(fromListSelectors.selectListPage)),
      ),
      mergeMap(([action, entitiesData, page]) => {
        if (page === 0 && entitiesData.length >= 10) {
          return of(fromListActions.notifyHydrated());
        }

        return this.todosService.getList(page).pipe(
          map(entities => fromListActions.loadListSuccess({ entities })),
          catchError(() => of(fromListActions.loadListFailure())),
        );
      }),
    ),
  );

  public createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListActions.createTodo),
      mergeMap(prop =>
        this.todosService.create(prop).pipe(
          map(todo => fromListActions.createTodoSuccess({ todo })),
          catchError(() => of(fromListActions.createTodoFailure())),
        ),
      ),
    ),
  );

  public removeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListActions.removeTodo),
      mergeMap(({ id }) =>
        this.todosService.remove(id).pipe(
          map(() => fromListActions.removeTodoSuccess({ id })),
          catchError(() => of(fromListActions.removeTodoFailure())),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private todosService: TodosService,
    private store: Store<AppState>,
  ) {}
}
