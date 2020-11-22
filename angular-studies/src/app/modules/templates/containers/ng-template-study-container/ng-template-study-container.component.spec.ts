import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateStudyContainerComponent } from './ng-template-study-container.component';

describe('NgTemplateStudyContainerComponent', () => {
  let component: NgTemplateStudyContainerComponent;
  let fixture: ComponentFixture<NgTemplateStudyContainerComponent>;

  beforeEach(async(() => {
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
