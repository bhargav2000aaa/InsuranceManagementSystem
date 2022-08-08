import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListOfPolicyHolderComponent } from './update-list-of-policy-holder.component';

describe('UpdateListOfPolicyHolderComponent', () => {
  let component: UpdateListOfPolicyHolderComponent;
  let fixture: ComponentFixture<UpdateListOfPolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListOfPolicyHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateListOfPolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
