import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.reducer';

import { Todo } from '../../../../shared/models/todo.model';
import * as fromListActions from '../../state/list.actions';
import * as fromListSelectors from '../../state/list.selectors';

@Component({
  selector: 'app-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss'],
})
export class LastTodosComponent implements OnInit {
  list$: Observable<Todo[]>;

  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(fromListActions.loadListFromLastTodos());

    this.list$ = this.store.pipe(select(fromListSelectors.selectListEntities));
  }

  // @Todo implement markAsDone on state
  // eslint-disable-next-line class-methods-use-this
  markAsDone(id: number): void {
    //  this.listService.toggleDone(id);
    console.log('TODO');
  }
}
