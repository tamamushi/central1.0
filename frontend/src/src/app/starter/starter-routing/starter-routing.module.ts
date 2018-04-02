import { StarterComponent } from './../starter.component';
import { S3TableListComponent } from './../s3-table-list/s3-table-list.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'starter',
        component: StarterComponent,
      },
      {
	path: 'tablelist',
	component: S3TableListComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StarterRoutingModule { }
