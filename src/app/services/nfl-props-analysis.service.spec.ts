import { TestBed } from '@angular/core/testing';

import { NflPropsAnalysisService } from './nfl-props-analysis.service';

describe('NflPropsAnalysisService', () => {
  let service: NflPropsAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NflPropsAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
