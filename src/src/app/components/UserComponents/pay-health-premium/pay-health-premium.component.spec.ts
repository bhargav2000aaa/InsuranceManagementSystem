import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayHealthPremiumComponent } from './pay-health-premium.component';

describe('PayHealthPremiumComponent', () => {
  let component: PayHealthPremiumComponent;
  let fixture: ComponentFixture<PayHealthPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayHealthPremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayHealthPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
