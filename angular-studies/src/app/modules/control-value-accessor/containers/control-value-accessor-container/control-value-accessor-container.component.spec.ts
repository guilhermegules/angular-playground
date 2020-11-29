import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValueAccessorContainerComponent } from './control-value-accessor-container.component';

describe('ControlValueAccessorContainerComponent', () => {
  let component: ControlValueAccessorContainerComponent;
  let fixture: ComponentFixture<ControlValueAccessorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlValueAccessorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlValueAccessorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
