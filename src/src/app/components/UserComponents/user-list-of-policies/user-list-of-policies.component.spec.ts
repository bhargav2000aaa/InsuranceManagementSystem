import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListOfPoliciesComponent } from './user-list-of-policies.component';

describe('UserListOfPoliciesComponent', () => {
  let component: UserListOfPoliciesComponent;
  let fixture: ComponentFixture<UserListOfPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListOfPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListOfPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
