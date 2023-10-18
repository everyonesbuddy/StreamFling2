import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveNewsletterComponent } from './exclusive-newsletter.component';

describe('ExclusiveNewsletterComponent', () => {
  let component: ExclusiveNewsletterComponent;
  let fixture: ComponentFixture<ExclusiveNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusiveNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusiveNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
