import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { By } from '@angular/platform-browser';
import { LastTodosComponent } from './last-todos.component';
import { listInitialState } from '../state/list.reducer';
import * as fromListActions from '../state/list.actions';

describe('LastTodosComponent', () => {
  let fixture: ComponentFixture<LastTodosComponent>;
  let component: LastTodosComponent;

  let store: MockStore<any>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LastTodosComponent],
        providers: [provideMockStore({ initialState: { list: listInitialState } })],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTodosComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading indicator', () => {
    store.setState({
      list: {
        ...listInitialState,
        loading: true,
      },
    });
    fixture.detectChanges();

    const loading = fixture.debugElement.query(By.css('span'));

    expect(loading).toBeTruthy();
  });
});
