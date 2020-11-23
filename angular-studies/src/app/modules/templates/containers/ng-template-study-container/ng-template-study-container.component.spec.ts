import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgTemplateStudyContainerComponent } from './ng-template-study-container.component';

describe('NgTemplateStudyContainerComponent', () => {
  let component: NgTemplateStudyContainerComponent;
  let fixture: ComponentFixture<NgTemplateStudyContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateStudyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateStudyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
