import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopComponent } from '../top/top.component';
import { ProjectListComponent } from '../project/project-list/project-list.component';
import { CustomerListComponent } from '../customer/customer-list/customer-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'top', pathMatch: 'full' },
      { path: 'top', component: TopComponent }
      ],
	{
      onSameUrlNavigation: 'reload'
      }
    )
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
