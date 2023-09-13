import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbWalksPropDetailsComponent } from './mlb-walks-prop-details.component';

describe('MlbWalksPropDetailsComponent', () => {
  let component: MlbWalksPropDetailsComponent;
  let fixture: ComponentFixture<MlbWalksPropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbWalksPropDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlbWalksPropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
