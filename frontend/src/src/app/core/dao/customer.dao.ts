/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc service
 *  @module
 *  @name CustomerDAO
 *  @description
 *
 *  @file Customer.dao.ts
**/

import { Injectable, Inject } from '@angular/core';
import { DriverInterface } from '../driver/driver-interface';
import { DAOInterface } from './dao-interface';

import { Customer } from '../model/customer';

@Injectable()
export class CustomerDAO implements DAOInterface {

    private _accesor: DriverInterface;

    constructor() { }
    setDriver(_driver: DriverInterface)
    {
        _driver.setDataSource('Customer');
        this._accesor = _driver; 
    }

    fetchAll(): Customer[] {
        return this._accesor.find()
                .then( res => { return Promise.resolve(res as Customer[]); });
    }

    findById(_id: number): Customer {
        return this._accesor.findById(_id)
                .then( res => { return Promise.resolve(res as Customer); });
    }
}
