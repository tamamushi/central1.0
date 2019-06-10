import { TestBed, inject } from '@angular/core/testing';

import { ChargeInvoiceDAO } from './charge-invoice.dao';

describe('ChargeInvoiceDAO', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChargeInvoiceDAO]
    });
  });

  it('should be created', inject([ChargeInvoiceDAO], (service: ChargeInvoiceDAO) => {
    expect(service).toBeTruthy();
  }));
});
