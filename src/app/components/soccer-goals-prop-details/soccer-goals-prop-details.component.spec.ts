import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerGoalsPropDetailsComponent } from './soccer-goals-prop-details.component';

describe('SoccerGoalsPropDetailsComponent', () => {
  let component: SoccerGoalsPropDetailsComponent;
  let fixture: ComponentFixture<SoccerGoalsPropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerGoalsPropDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerGoalsPropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
