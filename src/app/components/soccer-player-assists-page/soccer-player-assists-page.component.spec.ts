import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerPlayerAssistsPageComponent } from './soccer-player-assists-page.component';

describe('SoccerPlayerAssistsPageComponent', () => {
  let component: SoccerPlayerAssistsPageComponent;
  let fixture: ComponentFixture<SoccerPlayerAssistsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerPlayerAssistsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerPlayerAssistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
