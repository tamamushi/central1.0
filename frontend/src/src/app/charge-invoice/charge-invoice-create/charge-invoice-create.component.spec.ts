import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeInvoiceCreateComponent } from './charge-invoice-create.component';

describe('ChargeInvoiceCreateComponent', () => {
  let component: ChargeInvoiceCreateComponent;
  let fixture: ComponentFixture<ChargeInvoiceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeInvoiceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeInvoiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
