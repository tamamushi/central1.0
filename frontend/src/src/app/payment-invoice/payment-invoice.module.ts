/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc module
 *  @module
 *  @name PaymentInvoiceModule
 *  @description
 *
 *  @file payment-invoice.module.ts
 *
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PaymentInvoiceComponent } from './payment-invoice.component';
//import { PaymentInvoiceListComponent } from './payment-invoice-list/payment-invoice-list.component';
//import { PaymentInvoiceCreateComponent } from './payment-invoice-create/payment-invoice-create.component';
//import { PaymentInvoiceDetailComponent } from './payment-invoice-detail/payment-invoice-detail.component'

const paymentInvoiceModuleRoutes: Routes = [
    {
        path: 'payment-invoice',
        component: PaymentInvoiceComponent,
        children: [
            { path: '', component: PaymentInvoiceComponent },
            //           { path: 'create', component: PaymentInvoiceCreateComponent },
            //{ path: 'detail/:id', component: PaymentInvoiceDetailComponent }
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(paymentInvoiceModuleRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    PaymentInvoiceComponent,
    //PaymentInvoiceListComponent,
    //    PaymentInvoiceCreateComponent,
    //PaymentInvoiceDetailComponent
  ]
})
export class PaymentInvoiceModule { }
