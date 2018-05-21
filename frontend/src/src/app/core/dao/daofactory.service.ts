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

@Injectable()
export class DAOFactoryService {

    _dao:   DAOInterface;

    constructor(private _driver: DriverHttpService) {}

    create(_dataSource: string) 
    {
        this._dao   = new ProjectDAO();
        this._dao.setDriver(this._driver);
        return this._dao;
    }
}
