import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerAssistsPropDetailsComponent } from './soccer-assists-prop-details.component';

describe('SoccerAssistsPropDetailsComponent', () => {
  let component: SoccerAssistsPropDetailsComponent;
  let fixture: ComponentFixture<SoccerAssistsPropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerAssistsPropDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoccerAssistsPropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
