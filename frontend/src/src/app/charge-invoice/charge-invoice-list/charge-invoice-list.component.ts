/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc component
 *  @module
 *  @name ChargeInvoiceListComponent
 *  @description
 *
 *  @file charge-invoice-list.component.ts
 *
**/

import { Component, Inject, OnInit } from '@angular/core';
import { ChargeInvoiceService } from '../../core/biz/charge-invoice.service';
import { ChargeInvoice } from '../../core/model/charge-invoice';

@Component({
  selector: 'app-charge-invoice-list',
  templateUrl: './charge-invoice-list.component.html',
  styleUrls: ['./charge-invoice-list.component.css']
})
export class ChargeInvoiceListComponent implements OnInit {

    public invoices: ChargeInvoice[];

    constructor(
        private _service:ChargeInvoiceService
    ) { }

    // 画面描画時にデータ一覧を取得
    ngOnInit() {
        this._service.fetchChargeInvoices()
            .then(r => { this.invoices = r; });
    }
}
