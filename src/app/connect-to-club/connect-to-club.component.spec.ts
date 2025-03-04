import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToClubComponent } from './connect-to-club.component';

describe('ConnectToClubComponent', () => {
  let component: ConnectToClubComponent;
  let fixture: ComponentFixture<ConnectToClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectToClubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectToClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
