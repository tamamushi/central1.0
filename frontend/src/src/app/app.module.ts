import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LayoutModule } from './layout/layout.modules';

import { TopComponent } from './top/top.component';

//import { ProjectModule } from './project/project.module';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectCreateComponent } from './project/project-create/project-create.component';

//import { ChargeInvoiceModule } from './charge-invoice/charge-invoice.module';
//import { ChargeInvoiceComponent } from './charge-invoice/charge-invoice.component';

//import { PaymentInvoiceModule } from './payment-invoice/payment-invoice.module';
//import { PaymentInvoiceComponent } from './payment-invoice/payment-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
//    ProjectComponent,
//    ProjectListComponent,
//    ProjectCreateComponent,
//    ChargeInvoiceComponent,
//    PaymentInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
//    ProjectModule,
//    ChargeInvoiceModule,
//    PaymentInvoiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
