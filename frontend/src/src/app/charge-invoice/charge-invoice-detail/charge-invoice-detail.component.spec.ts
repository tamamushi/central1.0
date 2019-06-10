import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeInvoiceDetailComponent } from './charge-invoice-detail.component';

describe('ChargeInvoiceDetailComponent', () => {
  let component: ChargeInvoiceDetailComponent;
  let fixture: ComponentFixture<ChargeInvoiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeInvoiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeInvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
