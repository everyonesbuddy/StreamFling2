import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerPlayerGoalsPageComponent } from './soccer-player-goals-page.component';

describe('SoccerPlayerGoalsPageComponent', () => {
  let component: SoccerPlayerGoalsPageComponent;
  let fixture: ComponentFixture<SoccerPlayerGoalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerPlayerGoalsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerPlayerGoalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
