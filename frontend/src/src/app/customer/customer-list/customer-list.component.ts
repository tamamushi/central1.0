/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc component
 *  @module
 *  @name CustomerListComponent
 *  @description
 *
 *  @file customer-list.component.ts
 *
**/

import { Component, Inject, OnInit } from '@angular/core';
import { CustomerService } from '../../core/biz/customer.service';
import { Customer } from '../../core/model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

    public customers: Customer[];

    constructor(
        private _service:CustomerService
    ) { }

    // 画面描画時にデータ一覧を取得
    ngOnInit() {
        this._service.fetchCustomers()
            .then(r => { this.customers = r; });
    }
}
