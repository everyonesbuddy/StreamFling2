import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddsScreenComponent } from './odds-screen.component';

describe('OddsScreenComponent', () => {
  let component: OddsScreenComponent;
  let fixture: ComponentFixture<OddsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
