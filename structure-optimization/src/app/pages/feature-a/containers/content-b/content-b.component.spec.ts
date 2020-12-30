import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBComponent } from './content-b.component';

describe('ContentBComponent', () => {
  let component: ContentBComponent;
  let fixture: ComponentFixture<ContentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
