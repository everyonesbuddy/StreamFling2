import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaAssistsPropDetailsPageComponent } from './nba-assists-prop-details-page.component';

describe('NbaAssistsPropDetailsPageComponent', () => {
  let component: NbaAssistsPropDetailsPageComponent;
  let fixture: ComponentFixture<NbaAssistsPropDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaAssistsPropDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaAssistsPropDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
