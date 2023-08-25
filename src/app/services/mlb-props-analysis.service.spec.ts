import { TestBed } from '@angular/core/testing';

import { MlbPropsAnalysisService } from './mlb-props-analysis.service';

describe('MlbPropsAnalysisService', () => {
  let service: MlbPropsAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlbPropsAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
