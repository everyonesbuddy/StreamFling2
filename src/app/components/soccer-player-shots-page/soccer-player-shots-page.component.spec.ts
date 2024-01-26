import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerPlayerShotsPageComponent } from './soccer-player-shots-page.component';

describe('SoccerPlayerShotsPageComponent', () => {
  let component: SoccerPlayerShotsPageComponent;
  let fixture: ComponentFixture<SoccerPlayerShotsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerPlayerShotsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerPlayerShotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
