import { TestBed } from '@angular/core/testing';

import { NbaPropsAnalysisService } from './nba-props-analysis.service';

describe('NbaPropsAnalysisService', () => {
  let service: NbaPropsAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaPropsAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
