import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { By } from '@angular/platform-browser';
import { ListComponent } from './list.component';
import { listInitialState } from '../state/list.reducer';
import * as fromListActions from '../state/list.actions';

describe('ListComponent', () => {
  let fixture: ComponentFixture<ListComponent>;
  let component: ListComponent;

  let store: MockStore<any>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ListComponent],
        providers: [provideMockStore({ initialState: { list: listInitialState } })],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
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

  it('should dispatch removeTodo action', () => {
    spyOn(store, 'dispatch');

    component.onDelete(123);

    expect(store.dispatch).toHaveBeenCalledWith(fromListActions.removeTodo({ id: 123 }));
  });
});
