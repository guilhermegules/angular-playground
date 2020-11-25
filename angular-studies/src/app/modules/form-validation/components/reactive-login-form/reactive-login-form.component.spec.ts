import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveLoginFormComponent } from './reactive-login-form.component';

describe('ReactiveLoginFormComponent', () => {
  let component: ReactiveLoginFormComponent;
  let fixture: ComponentFixture<ReactiveLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
