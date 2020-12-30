import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootFeatureAComponent } from './root-feature-a.component';

describe('RootFeatureAComponent', () => {
  let component: RootFeatureAComponent;
  let fixture: ComponentFixture<RootFeatureAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootFeatureAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootFeatureAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
