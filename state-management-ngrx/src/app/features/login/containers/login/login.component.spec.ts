import { ChangeDetectorRef, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/state/app.reducer';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugEl: DebugElement;
  let store: MockStore<any>;

  let cd: ChangeDetectorRef;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [provideMockStore({ initialState: { user: initialState } })],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;

    cd = fixture.componentRef.injector.get(ChangeDetectorRef);

    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a value when click on login', () => {
    spyOn(store, 'dispatch');

    component.login();

    expect(store.dispatch).toHaveBeenCalled();
  });
});
