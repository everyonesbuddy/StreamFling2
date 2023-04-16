import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPropsScreenComponent } from './player-props-screen.component';

describe('PlayerPropsScreenComponent', () => {
  let component: PlayerPropsScreenComponent;
  let fixture: ComponentFixture<PlayerPropsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPropsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerPropsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
