import { TestBed } from '@angular/core/testing';

import { AdminsubscriptionService } from './adminsubscription.service';

describe('AdminsubscriptionService', () => {
  let service: AdminsubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
