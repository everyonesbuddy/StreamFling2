import { TestBed } from '@angular/core/testing';

import { SoccerPropsAnalysisService } from './soccer-props-analysis.service';

describe('SoccerPropsAnanalysisService', () => {
  let service: SoccerPropsAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoccerPropsAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
