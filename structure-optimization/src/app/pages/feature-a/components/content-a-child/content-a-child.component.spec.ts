import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAChildComponent } from './content-a-child.component';

describe('ContentAChildComponent', () => {
  let component: ContentAChildComponent;
  let fixture: ComponentFixture<ContentAChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
