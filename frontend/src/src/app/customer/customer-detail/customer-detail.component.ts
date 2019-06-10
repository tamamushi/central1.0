/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc component
 *  @module
 *  @name CustomerDetailComponent
 *  @description
 *
 *  @file customer-detail.component.ts
 *
**/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerService } from '../../core/biz/customer.service';
import { Customer } from '../../core/model/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    public customer: Customer;

    constructor(
    private _route: ActivatedRoute,
    private _service: CustomerService
    ) { }

    ngOnInit() {
        var id = this._route.snapshot.paramMap.get('id');
        this._service.findCustomersById(Number(id))
            .then(r => { this.customer = r; });
    }
}
