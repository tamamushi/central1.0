/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc module
 *  @module
 *  @name CoreModule
 *  @description
 *
 *  @file core.module.ts
 *
**/

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DAOFactoryService } from './dao/daofactory.service';
import { DriverHttpService } from './driver/driver-http.service';

import { ProjectDAO } from './dao/project.dao';
import { ProjectService } from './biz/project.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    DAOFactoryService,
    DriverHttpService,
    ProjectDAO,
    ProjectService
  ]
})
export class CoreModule { }
