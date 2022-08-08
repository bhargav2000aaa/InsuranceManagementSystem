import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfHealthPoliciesComponent } from './list-of-health-policies.component';

describe('ListOfHealthPoliciesComponent', () => {
  let component: ListOfHealthPoliciesComponent;
  let fixture: ComponentFixture<ListOfHealthPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfHealthPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfHealthPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
