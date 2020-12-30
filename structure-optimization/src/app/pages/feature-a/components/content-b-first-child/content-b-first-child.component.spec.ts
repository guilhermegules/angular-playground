import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBFirstChildComponent } from './content-b-first-child.component';

describe('ContentBFirstChildComponent', () => {
  let component: ContentBFirstChildComponent;
  let fixture: ComponentFixture<ContentBFirstChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBFirstChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBFirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
