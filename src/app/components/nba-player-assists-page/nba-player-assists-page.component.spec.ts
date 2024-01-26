import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayerAssistsPageComponent } from './nba-player-assists-page.component';

describe('NbaPlayerAssistsPageComponent', () => {
  let component: NbaPlayerAssistsPageComponent;
  let fixture: ComponentFixture<NbaPlayerAssistsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaPlayerAssistsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaPlayerAssistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
