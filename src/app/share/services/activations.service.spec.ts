import { TestBed } from '@angular/core/testing';

import { ActivationsService } from './activations.service';

describe('ActivationsService', () => {
  let service: ActivationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
