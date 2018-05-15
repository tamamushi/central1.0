/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  Project:    centralGrrow
 *  Version:    1.0
 *  Revision:   0.1
 *
 *  File:       app.module.ts
 *  Date:       2018/04/30
**/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Logger, Level } from 'angular2-logger/core'

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { ProjectModule } from './project/project.module';

import { TopComponent } from './top/top.component';

//import { ChargeInvoiceModule } from './charge-invoice/charge-invoice.module';
//import { ChargeInvoiceComponent } from './charge-invoice/charge-invoice.component';

//import { PaymentInvoiceModule } from './payment-invoice/payment-invoice.module';
//import { PaymentInvoiceComponent } from './payment-invoice/payment-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent
//    ChargeInvoiceComponent,
//    PaymentInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ProjectModule,
    CoreModule
//    ChargeInvoiceModule,
//    PaymentInvoiceModule
  ],
  providers: [
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(private logger:Logger) {
        this.logger.level = Level.LOG
    }
}
