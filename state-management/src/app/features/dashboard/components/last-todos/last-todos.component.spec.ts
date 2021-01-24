import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTodosComponent } from './last-todos.component';

describe('LastTodosComponent', () => {
  let component: LastTodosComponent;
  let fixture: ComponentFixture<LastTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
