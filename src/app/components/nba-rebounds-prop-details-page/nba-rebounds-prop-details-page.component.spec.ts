import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaReboundsPropDetailsPageComponent } from './nba-rebounds-prop-details-page.component';

describe('NbaReboundsPropDetailsPageComponent', () => {
  let component: NbaReboundsPropDetailsPageComponent;
  let fixture: ComponentFixture<NbaReboundsPropDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaReboundsPropDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaReboundsPropDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
