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

    private results;
    constructor( private _http:HttpClient) { }

    find(name: string) {
        var endpoint    = environment.api_endpoint + '/' + name.toLowerCase() + 's';
        console.log(endpoint);

        let promise = new Promise((resolve, reject) => {
            this._http.get(endpoint)
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
    // return `[{ "ProjectNo": "1" },{ "ProjectNo": "2" }]`
    }
}
