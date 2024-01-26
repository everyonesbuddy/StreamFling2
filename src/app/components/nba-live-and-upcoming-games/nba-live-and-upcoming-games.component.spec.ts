import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaLiveAndUpcomingGamesComponent } from './nba-live-and-upcoming-games.component';

describe('NbaLiveAndUpcomingGamesComponent', () => {
  let component: NbaLiveAndUpcomingGamesComponent;
  let fixture: ComponentFixture<NbaLiveAndUpcomingGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaLiveAndUpcomingGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaLiveAndUpcomingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
