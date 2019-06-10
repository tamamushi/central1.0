/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc service
 *  @module
 *  @name DAOFactoryService
 *  @description
 *
 *  @file daofactory.service.ts
**/

import { Injectable } from '@angular/core';
import { DriverHttpService } from '../driver/driver-http.service';
import { DAOInterface } from './dao-interface';
import { ProjectDAO } from './project.dao';
import { CustomerDAO } from './customer.dao';
import { ChargeInvoiceDAO } from './charge-invoice.dao';

@Injectable()
export class DAOFactoryService {

    _dao:   DAOInterface;

    constructor(private _driver: DriverHttpService) {}

    create(_dataSource: string) 
    {

        switch(_dataSource) {
        case "Project": this._dao = this.getProject(); break;
        case "Customer": this._dao = this.getCustomer(); break;
        case "ChargeInvoice": this._dao = this.getChargeInvoice(); break;
        }

        this._dao.setDriver(this._driver);
        return this._dao;
    }

    getProject() { return new ProjectDAO() }
    getCustomer() { return new CustomerDAO() }
    getChargeInvoice() { return new ChargeInvoiceDAO() }
}
