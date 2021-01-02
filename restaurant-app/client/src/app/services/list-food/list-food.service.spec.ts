import { TestBed } from '@angular/core/testing';

import { ListFoodService } from './list-food.service';

describe('ListFoodService', () => {
  let service: ListFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
