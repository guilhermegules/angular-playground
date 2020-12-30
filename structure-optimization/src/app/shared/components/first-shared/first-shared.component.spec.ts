import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSharedComponent } from './first-shared.component';

describe('FirstSharedComponent', () => {
  let component: FirstSharedComponent;
  let fixture: ComponentFixture<FirstSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
