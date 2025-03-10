import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriptionInvoiceComponent } from './admin-subscription-invoice.component';

describe('AdminSubscriptionInvoiceComponent', () => {
  let component: AdminSubscriptionInvoiceComponent;
  let fixture: ComponentFixture<AdminSubscriptionInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSubscriptionInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubscriptionInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
