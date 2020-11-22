import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateStudyComponent } from './ng-template-study.component';

describe('NgTemplateStudyComponent', () => {
  let component: NgTemplateStudyComponent;
  let fixture: ComponentFixture<NgTemplateStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
