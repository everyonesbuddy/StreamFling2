import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesTraditionalOddsComponent } from './games-traditional-odds.component';

describe('GamesTraditionalOddsComponent', () => {
  let component: GamesTraditionalOddsComponent;
  let fixture: ComponentFixture<GamesTraditionalOddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesTraditionalOddsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesTraditionalOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
