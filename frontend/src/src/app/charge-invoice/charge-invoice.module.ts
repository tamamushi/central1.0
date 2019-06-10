/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc module
 *  @module
 *  @name ChargeInvoiceModule
 *  @description
 *
 *  @file charge-invoice.module.ts
 *
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChargeInvoiceComponent } from './charge-invoice.component';
import { ChargeInvoiceListComponent } from './charge-invoice-list/charge-invoice-list.component';
import { ChargeInvoiceDetailComponent } from './charge-invoice-detail/charge-invoice-detail.component';
import { ChargeInvoiceCreateComponent } from './charge-invoice-create/charge-invoice-create.component';

const chargeInvoiceModuleRoutes: Routes = [
    {
        path: 'charge-invoice',
        component: ChargeInvoiceComponent,
        children: [
            { path: '', component: ChargeInvoiceListComponent },
            { path: 'create', component: ChargeInvoiceCreateComponent },
            { path: 'detail/:id', component: ChargeInvoiceDetailComponent }
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chargeInvoiceModuleRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ChargeInvoiceComponent,
    ChargeInvoiceListComponent,
    ChargeInvoiceDetailComponent,
    ChargeInvoiceCreateComponent
  ]
})
export class ChargeInvoiceModule { }
