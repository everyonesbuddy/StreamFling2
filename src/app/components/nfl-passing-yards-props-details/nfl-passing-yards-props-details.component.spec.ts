import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflPassingYardsPropsDetailsComponent } from './nfl-passing-yards-props-details.component';

describe('NflPassingYardsPropsDetailsComponent', () => {
  let component: NflPassingYardsPropsDetailsComponent;
  let fixture: ComponentFixture<NflPassingYardsPropsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflPassingYardsPropsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflPassingYardsPropsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
