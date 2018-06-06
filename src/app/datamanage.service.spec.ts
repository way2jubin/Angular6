import { TestBed, inject } from '@angular/core/testing';

import { DatamanageService } from './datamanage.service';

describe('DatamanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatamanageService]
    });
  });

  it('should be created', inject([DatamanageService], (service: DatamanageService) => {
    expect(service).toBeTruthy();
  }));
});
