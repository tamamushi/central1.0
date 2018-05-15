/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc service
 *  @module
 *  @name ProjectDAO
 *  @description
 *
 *  @file project.dao.ts
**/

import { Injectable, Inject } from '@angular/core';
import { DriverInterface } from '../driver/driver-interface';
import { DAOInterface } from './dao-interface';

import { Project } from '../model/project';

@Injectable()
export class ProjectDAO implements DAOInterface {

    private _accesor: DriverInterface;

    constructor() { }
    setDriver(_driver: DriverInterface) { this._accesor = _driver; }

    fetchAll() {
//        const res = `[{ "ProjectNo": "1" },{ "ProjectNo": "2" }]`;
//        return JSON.parse(res) as Project[];
        return this._accesor.find('Project') as Project[];
    }
}
