import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayerPointsPageComponent } from './nba-player-points-page.component';

describe('NbaPlayerPointsPageComponent', () => {
  let component: NbaPlayerPointsPageComponent;
  let fixture: ComponentFixture<NbaPlayerPointsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaPlayerPointsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaPlayerPointsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
