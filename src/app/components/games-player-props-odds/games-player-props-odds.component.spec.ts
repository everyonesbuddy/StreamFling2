import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPlayerPropsOddsComponent } from './games-player-props-odds.component';

describe('GamesPlayerPropsOddsComponent', () => {
  let component: GamesPlayerPropsOddsComponent;
  let fixture: ComponentFixture<GamesPlayerPropsOddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesPlayerPropsOddsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesPlayerPropsOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
