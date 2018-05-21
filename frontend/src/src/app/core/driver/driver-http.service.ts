/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc service
 *  @module
 *  @name DriverHttpService
 *  @description
 *
 *  @file driver-http.service.ts
**/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DriverInterface } from './driver-interface'
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class DriverHttpService implements DriverInterface {

    private _endpoint: string;
    private _dataSource: string;

    constructor(
        private _http:HttpClient,
    ) { }

    setDataSource(_dataSource: string) 
    { 
        this._endpoint = environment.api_endpoint + '/';
        this._dataSource = _dataSource.toLowerCase();
    }

    getTargetEndpointString(_addString: string): string 
    { 
        return this._endpoint + this._dataSource + _addString; 
    }

    private _get(__endpoint)
    {
        let promise = new Promise((resolve, reject) => {
            this._http.get(__endpoint)
                .toPromise()
                .then(
                    res => { // Success
                        console.log(res);
                        resolve(res);
                    },
                    msg => { // Error
                    reject(msg);
                    }
                );
            });
        return promise;            
    }

    find() {
        var endpoint    = this.getTargetEndpointString('s');
        console.log(endpoint);
        return this._get(endpoint);
    }

    findById(_id: number)
    {
        var endpoint    = this.getTargetEndpointString('/' + _id);
        console.log(endpoint);
        return this._get(endpoint);
    }
}
