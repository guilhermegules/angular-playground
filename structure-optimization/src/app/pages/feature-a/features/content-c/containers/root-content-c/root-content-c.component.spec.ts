import { ContentCService } from './../../services/content-c.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootContentCComponent } from './root-content-c.component';

describe('RootContentCComponent', () => {
  let component: RootContentCComponent;
  let fixture: ComponentFixture<RootContentCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootContentCComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [ContentCService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootContentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
