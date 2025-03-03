import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDeliveryComponent } from './rent-delivery.component';

describe('RentDeliveryComponent', () => {
  let component: RentDeliveryComponent;
  let fixture: ComponentFixture<RentDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentDeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
