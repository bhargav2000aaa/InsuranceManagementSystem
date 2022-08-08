import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPolicyHoldersComponent } from './list-of-policy-holders.component';

describe('ListOfPolicyHoldersComponent', () => {
  let component: ListOfPolicyHoldersComponent;
  let fixture: ComponentFixture<ListOfPolicyHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPolicyHoldersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfPolicyHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
