/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc service
 *  @module
 *  @name ChargeInvoiceDAO
 *  @description
 *
 *  @file ChargeInvoice.dao.ts
**/

import { Injectable, Inject } from '@angular/core';
import { DriverInterface } from '../driver/driver-interface';
import { DAOInterface } from './dao-interface';

import { ChargeInvoice } from '../model/charge-invoice';

@Injectable()
export class ChargeInvoiceDAO implements DAOInterface {

    private _accesor: DriverInterface;

    constructor() { }
    setDriver(_driver: DriverInterface)
    {
        _driver.setDataSource('ChargeInvoice');
        this._accesor = _driver; 
    }

    fetchAll(): ChargeInvoice[] {
        return this._accesor.find()
                .then( res => { return Promise.resolve(res as ChargeInvoice[]); });
    }

    findById(_id: number): ChargeInvoice {
        return this._accesor.findById(_id)
                .then( res => { return Promise.resolve(res as ChargeInvoice); });
    }
}
