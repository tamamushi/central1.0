import { TestBed, inject } from '@angular/core/testing';

import { ChargeInvoiceService } from './charge-invoice.service';

describe('ChargeInvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChargeInvoiceService]
    });
  });

  it('should be created', inject([ChargeInvoiceService], (service: ChargeInvoiceService) => {
    expect(service).toBeTruthy();
  }));
});
