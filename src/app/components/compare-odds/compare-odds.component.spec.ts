import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareOddsComponent } from './compare-odds.component';

describe('CompareOddsComponent', () => {
  let component: CompareOddsComponent;
  let fixture: ComponentFixture<CompareOddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareOddsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompareOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
