import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriptionPlanComponent } from './admin-subscription-plan.component';

describe('AdminSubscriptionPlanComponent', () => {
  let component: AdminSubscriptionPlanComponent;
  let fixture: ComponentFixture<AdminSubscriptionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSubscriptionPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubscriptionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
