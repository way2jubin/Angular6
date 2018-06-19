import { TestBed, inject } from '@angular/core/testing';

import { CustomAlertSService } from './custom-alert-s.service';

describe('CustomAlertSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomAlertSService]
    });
  });

  it('should be created', inject([CustomAlertSService], (service: CustomAlertSService) => {
    expect(service).toBeTruthy();
  }));
});
