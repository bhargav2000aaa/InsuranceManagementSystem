import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfHomePoliciesComponent } from './list-of-home-policies.component';

describe('ListOfHomePoliciesComponent', () => {
  let component: ListOfHomePoliciesComponent;
  let fixture: ComponentFixture<ListOfHomePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfHomePoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfHomePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
