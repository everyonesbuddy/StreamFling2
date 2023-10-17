import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflReceivingYardsPropsDetailsComponent } from './nfl-receiving-yards-props-details.component';

describe('NflReceivingYardsPropsDetailsComponent', () => {
  let component: NflReceivingYardsPropsDetailsComponent;
  let fixture: ComponentFixture<NflReceivingYardsPropsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflReceivingYardsPropsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflReceivingYardsPropsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
