import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriptionInvoicesComponent } from './admin-subscription-invoices.component';

describe('AdminSubscriptionInvoicesComponent', () => {
  let component: AdminSubscriptionInvoicesComponent;
  let fixture: ComponentFixture<AdminSubscriptionInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSubscriptionInvoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubscriptionInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
