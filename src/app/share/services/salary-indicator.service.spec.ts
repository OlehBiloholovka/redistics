import { TestBed } from '@angular/core/testing';

import { SalaryIndicatorService } from './salary-indicator.service';

describe('SalaryIndicatorService', () => {
  let service: SalaryIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
