import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBroadcastingAndBettorsSolutionsComponent } from './media-broadcasting-and-bettors-solutions.component';

describe('MediaBroadcastingAndBettorsSolutionsComponent', () => {
  let component: MediaBroadcastingAndBettorsSolutionsComponent;
  let fixture: ComponentFixture<MediaBroadcastingAndBettorsSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaBroadcastingAndBettorsSolutionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      MediaBroadcastingAndBettorsSolutionsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
