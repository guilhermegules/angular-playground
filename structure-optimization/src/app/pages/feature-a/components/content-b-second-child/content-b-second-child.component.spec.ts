import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBSecondChildComponent } from './content-b-second-child.component';

describe('ContentBSecondChildComponent', () => {
  let component: ContentBSecondChildComponent;
  let fixture: ComponentFixture<ContentBSecondChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBSecondChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBSecondChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
