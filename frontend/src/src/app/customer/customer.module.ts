/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc module
 *  @module
 *  @name CustomerModule
 *  @description
 *
 *  @file customer.module.ts
 *
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';

const customerModuleRoutes: Routes = [
    {
        path: 'customer',
        component: CustomerComponent,
        children: [
            { path: '', component: CustomerListComponent },
            { path: 'create', component: CustomerCreateComponent },
            { path: 'detail/:id', component: CustomerDetailComponent },
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customerModuleRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
  ]
})
export class CustomerModule { }
