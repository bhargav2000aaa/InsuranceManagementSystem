import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHomePolicyComponent } from './update-home-policy.component';

describe('UpdateHomePolicyComponent', () => {
  let component: UpdateHomePolicyComponent;
  let fixture: ComponentFixture<UpdateHomePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHomePolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHomePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
