import { TestBed, inject } from '@angular/core/testing';

import { DriverHttpService } from './driver-http.service';

describe('DriverHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverHttpService]
    });
  });

  it('should be created', inject([DriverHttpService], (service: DriverHttpService) => {
    expect(service).toBeTruthy();
  }));
});
