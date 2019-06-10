import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeInvoiceListComponent } from './charge-invoice-list.component';

describe('ChargeInvoiceListComponent', () => {
  let component: ChargeInvoiceListComponent;
  let fixture: ComponentFixture<ChargeInvoiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeInvoiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
