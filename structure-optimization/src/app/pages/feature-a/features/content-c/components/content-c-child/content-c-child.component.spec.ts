import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCChildComponent } from './content-c-child.component';

describe('ContentCChildComponent', () => {
  let component: ContentCChildComponent;
  let fixture: ComponentFixture<ContentCChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
