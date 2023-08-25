import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPointsPropDetailsPageComponent } from './nba-points-prop-details-page.component';

describe('NbaPointsPropDetailsPageComponent', () => {
  let component: NbaPointsPropDetailsPageComponent;
  let fixture: ComponentFixture<NbaPointsPropDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaPointsPropDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaPointsPropDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
