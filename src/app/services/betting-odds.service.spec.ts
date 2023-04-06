import { TestBed } from '@angular/core/testing';

import { BettingOddsService } from './betting-odds.service';

describe('BettingOddsService', () => {
  let service: BettingOddsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BettingOddsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
