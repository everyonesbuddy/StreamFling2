import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbStrikeoutsPropDetailsComponent } from './mlb-strikeouts-prop-details.component';

describe('MlbStrikeoutsPropDetailsComponent', () => {
  let component: MlbStrikeoutsPropDetailsComponent;
  let fixture: ComponentFixture<MlbStrikeoutsPropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbStrikeoutsPropDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlbStrikeoutsPropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
