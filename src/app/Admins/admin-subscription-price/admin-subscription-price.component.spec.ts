import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriptionPriceComponent } from './admin-subscription-price.component';

describe('AdminSubscriptionPriceComponent', () => {
  let component: AdminSubscriptionPriceComponent;
  let fixture: ComponentFixture<AdminSubscriptionPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSubscriptionPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubscriptionPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
