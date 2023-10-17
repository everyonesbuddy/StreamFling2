import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerShotsPropDetailsComponent } from './soccer-shots-prop-details.component';

describe('SoccerShotsPropDetailsComponent', () => {
  let component: SoccerShotsPropDetailsComponent;
  let fixture: ComponentFixture<SoccerShotsPropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerShotsPropDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerShotsPropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
