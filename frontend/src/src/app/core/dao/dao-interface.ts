/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc interface
 *  @module
 *  @name DAOInterface
 *  @description
 *
 *  @file dao-interface.ts
**/

import { DriverInterface } from '../driver/driver-interface';

export interface DAOInterface {

    setDriver(_driver: DriverInterface);
    fetchAll();
}

