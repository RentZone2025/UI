import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriptionPlansComponent } from './admin-subscription-plans.component';

describe('AdminSubscriptionPlansComponent', () => {
  let component: AdminSubscriptionPlansComponent;
  let fixture: ComponentFixture<AdminSubscriptionPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSubscriptionPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubscriptionPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
