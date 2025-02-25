import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorLoginVerifyComponent } from './two-factor-login-verify.component';

describe('TwoFactorLoginVerifyComponent', () => {
  let component: TwoFactorLoginVerifyComponent;
  let fixture: ComponentFixture<TwoFactorLoginVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoFactorLoginVerifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoFactorLoginVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
