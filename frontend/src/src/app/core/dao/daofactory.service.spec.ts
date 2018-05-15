import { TestBed, inject } from '@angular/core/testing';

import { DaofactoryService } from './daofactory.service';

describe('DaofactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaofactoryService]
    });
  });

  it('should be created', inject([DaofactoryService], (service: DaofactoryService) => {
    expect(service).toBeTruthy();
  }));
});
