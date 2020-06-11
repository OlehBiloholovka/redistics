import { TestBed } from '@angular/core/testing';

import { SalesIndicatorService } from './sales-indicator.service';

describe('SalesIndicatorService', () => {
  let service: SalesIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
