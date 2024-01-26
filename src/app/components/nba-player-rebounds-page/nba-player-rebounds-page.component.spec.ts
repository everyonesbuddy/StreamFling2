import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayerReboundsPageComponent } from './nba-player-rebounds-page.component';

describe('NbaPlayerReboundsPageComponent', () => {
  let component: NbaPlayerReboundsPageComponent;
  let fixture: ComponentFixture<NbaPlayerReboundsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaPlayerReboundsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaPlayerReboundsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
