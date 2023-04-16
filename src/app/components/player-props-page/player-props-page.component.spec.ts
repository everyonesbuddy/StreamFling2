import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPropsPageComponent } from './player-props-page.component';

describe('PlayerPropsPageComponent', () => {
  let component: PlayerPropsPageComponent;
  let fixture: ComponentFixture<PlayerPropsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPropsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerPropsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
