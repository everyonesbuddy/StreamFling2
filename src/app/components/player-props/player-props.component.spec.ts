import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPropsComponent } from './player-props.component';

describe('PlayerPropsComponent', () => {
  let component: PlayerPropsComponent;
  let fixture: ComponentFixture<PlayerPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerPropsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
