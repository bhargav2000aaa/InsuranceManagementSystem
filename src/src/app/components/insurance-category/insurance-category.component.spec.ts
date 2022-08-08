import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCategoryComponent } from './insurance-category.component';

describe('InsuranceCategoryComponent', () => {
  let component: InsuranceCategoryComponent;
  let fixture: ComponentFixture<InsuranceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
