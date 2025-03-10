import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentServicesComponent } from './rent-services.component';

describe('RentServicesComponent', () => {
  let component: RentServicesComponent;
  let fixture: ComponentFixture<RentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
