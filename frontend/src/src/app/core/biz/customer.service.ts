/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc service
 *  @module
 *  @name CustomerService
 *  @description
 *
 *  @file customer.service.ts
 *
**/

import { Injectable, Inject } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import { DAOInterface } from '../dao/dao-interface';
import { DAOFactoryService } from '../dao/daofactory.service';
import { Customer } from '../model/customer';

@Injectable()
export class CustomerService {

    private _dao:    DAOInterface;

    constructor(private _factory: DAOFactoryService) {
        this._dao = this._factory.create('Customer'); 
    }

    fetchCustomers() {
        return this._dao.fetchAll();
    }

    findCustomersById(_id: number) {
        return this._dao.findById(_id)
                .then( r => { return Promise.resolve(r) });
    }
}
