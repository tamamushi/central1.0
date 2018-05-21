/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc service
 *  @module
 *  @name ProjectService
 *  @description
 *
 *  @file project.service.ts
 *
**/

import { Injectable, Inject } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import { DAOInterface } from '../dao/dao-interface';
import { DAOFactoryService } from '../dao/daofactory.service';
import { Project } from '../model/project';

@Injectable()
export class ProjectService {

    private _dao:    DAOInterface;

    constructor(private _factory: DAOFactoryService) {
        this._dao = this._factory.create('Project'); 
    }

    fetchProjects() {
        return this._dao.fetchAll();
    }

    findProjectById(_id: number) {
        return this._dao.findById(_id)
                .then( r => { return Promise.resolve(r) });
    }
}
