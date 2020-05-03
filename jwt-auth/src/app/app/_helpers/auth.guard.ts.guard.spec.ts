import { TestBed } from '@angular/core/testing';

import { Auth.Guard.TsGuard } from './auth.guard.ts.guard';

describe('Auth.Guard.TsGuard', () => {
  let guard: Auth.Guard.TsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Auth.Guard.TsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
