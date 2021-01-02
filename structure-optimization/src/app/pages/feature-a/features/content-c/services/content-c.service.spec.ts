import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ContentCService } from './content-c.service';

describe('ContentCService', () => {
  let service: ContentCService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContentCService]
    });

    service = TestBed.inject(ContentCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
