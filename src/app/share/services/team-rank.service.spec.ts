import { TestBed } from '@angular/core/testing';

import { TeamRankService } from './team-rank.service';

describe('TeamRankService', () => {
  let service: TeamRankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamRankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
