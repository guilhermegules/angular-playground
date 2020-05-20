import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesRegisterComponent } from './movies-register.component';

describe('MoviesRegisterComponent', () => {
  let component: MoviesRegisterComponent;
  let fixture: ComponentFixture<MoviesRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
