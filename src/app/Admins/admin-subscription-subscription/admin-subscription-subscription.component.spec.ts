import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriptionSubscriptionComponent } from './admin-subscription-subscription.component';

describe('AdminSubscriptionSubscriptionComponent', () => {
  let component: AdminSubscriptionSubscriptionComponent;
  let fixture: ComponentFixture<AdminSubscriptionSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSubscriptionSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubscriptionSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
