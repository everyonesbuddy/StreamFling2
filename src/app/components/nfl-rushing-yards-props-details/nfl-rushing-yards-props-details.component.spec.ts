import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflRushingYardsPropsDetailsComponent } from './nfl-rushing-yards-props-details.component';

describe('NflRushingYardsPropsDetailsComponent', () => {
  let component: NflRushingYardsPropsDetailsComponent;
  let fixture: ComponentFixture<NflRushingYardsPropsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflRushingYardsPropsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflRushingYardsPropsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
