import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriptionSubscriptionsComponent } from './admin-subscription-subscriptions.component';

describe('AdminSubscriptionSubscriptionsComponent', () => {
  let component: AdminSubscriptionSubscriptionsComponent;
  let fixture: ComponentFixture<AdminSubscriptionSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSubscriptionSubscriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubscriptionSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
