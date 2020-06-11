import { TestBed } from '@angular/core/testing';

import { RegistrationIndicatorService } from './registration-indicator.service';

describe('RegistrationIndicatorService', () => {
  let service: RegistrationIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
