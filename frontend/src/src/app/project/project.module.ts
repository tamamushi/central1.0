/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc module
 *  @module
 *  @name ProjectModule
 *  @description
 *
 *  @file project.module.ts
 *
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component'

const projectModuleRoutes: Routes = [
    {
        path: 'project',
        component: ProjectComponent,
        children: [
            { path: '', component: ProjectListComponent },
            { path: 'create', component: ProjectCreateComponent },
            { path: 'detail/:id', component: ProjectDetailComponent }
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(projectModuleRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectDetailComponent
  ]
})
export class ProjectModule { }
