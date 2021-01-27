import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { pairwise, takeUntil } from 'rxjs/operators';

import { AppState } from 'src/app/state/app.reducer';
import * as fromListActions from '../../state/list.actions';
import * as fromListSelectors from '../../state/list.selectors';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit, OnDestroy {
  titleControl = new FormControl('');

  creating$: Observable<boolean>;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.creating$ = this.store.pipe(select(fromListSelectors.selectListCreating));

    this.creating$
      // [pairwise] Puts the old value and the new value and emit it
      .pipe(pairwise(), takeUntil(this.componentDestroyed$))
      .subscribe(([oldCreating, creating]) => {
        if (oldCreating && !creating) {
          this.titleControl.setValue('');
        }
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  save() {
    this.store.dispatch(fromListActions.createTodo({ title: this.titleControl.value }));
  }
}
