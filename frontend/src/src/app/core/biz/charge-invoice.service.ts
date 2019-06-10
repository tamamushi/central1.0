/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc service
 *  @module
 *  @name ChargeInvoiceService
 *  @description
 *
 *  @file charge-invoice.service.ts
 *
**/

import { Injectable, Inject } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import { DAOInterface } from '../dao/dao-interface';
import { DAOFactoryService } from '../dao/daofactory.service';
import { ChargeInvoice } from '../model/charge-invoice';

@Injectable()
export class ChargeInvoiceService {

    private _dao:    DAOInterface;

    constructor(private _factory: DAOFactoryService) {
        this._dao = this._factory.create('ChargeInvoice'); 
    }

    fetchChargeInvoices() {
        return this._dao.fetchAll();
    }

    findChargeInvoicesById(_id: number) {
        return this._dao.findById(_id)
                .then( r => { return Promise.resolve(r) });
    }
}
