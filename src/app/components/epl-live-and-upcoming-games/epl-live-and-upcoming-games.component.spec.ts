import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EplLiveAndUpcomingGamesComponent } from './epl-live-and-upcoming-games.component';

describe('EplLiveAndUpcomingGamesComponent', () => {
  let component: EplLiveAndUpcomingGamesComponent;
  let fixture: ComponentFixture<EplLiveAndUpcomingGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EplLiveAndUpcomingGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EplLiveAndUpcomingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
