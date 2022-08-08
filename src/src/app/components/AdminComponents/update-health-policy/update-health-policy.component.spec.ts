import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHealthPolicyComponent } from './update-health-policy.component';

describe('UpdateHealthPolicyComponent', () => {
  let component: UpdateHealthPolicyComponent;
  let fixture: ComponentFixture<UpdateHealthPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHealthPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHealthPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
