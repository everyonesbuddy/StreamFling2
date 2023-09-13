import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbHitsAllowedPropDetailsComponent } from './mlb-hits-allowed-prop-details.component';

describe('MlbHitsAllowedPropDetailsComponent', () => {
  let component: MlbHitsAllowedPropDetailsComponent;
  let fixture: ComponentFixture<MlbHitsAllowedPropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbHitsAllowedPropDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlbHitsAllowedPropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
