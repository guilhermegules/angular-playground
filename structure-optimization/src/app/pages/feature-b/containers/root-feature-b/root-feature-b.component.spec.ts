import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootFeatureBComponent } from './root-feature-b.component';

describe('RootFeatureBComponent', () => {
  let component: RootFeatureBComponent;
  let fixture: ComponentFixture<RootFeatureBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootFeatureBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootFeatureBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
