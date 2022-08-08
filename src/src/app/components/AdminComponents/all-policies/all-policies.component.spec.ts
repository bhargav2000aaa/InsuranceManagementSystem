import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPoliciesComponent } from './all-policies.component';

describe('AllPoliciesComponent', () => {
  let component: AllPoliciesComponent;
  let fixture: ComponentFixture<AllPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
