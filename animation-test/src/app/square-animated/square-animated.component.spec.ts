import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareAnimatedComponent } from './square-animated.component';

describe('SquareAnimatedComponent', () => {
  let component: SquareAnimatedComponent;
  let fixture: ComponentFixture<SquareAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareAnimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
