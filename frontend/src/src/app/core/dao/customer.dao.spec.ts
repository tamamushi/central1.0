import { TestBed, inject } from '@angular/core/testing';

import { CustomerDAO } from './customer.dao';

describe('CustomerDAO', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDAO]
    });
  });

  it('should be created', inject([CustomerDAO], (service: CustomerDAO) => {
    expect(service).toBeTruthy();
  }));
});
