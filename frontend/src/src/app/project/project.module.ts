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
import { ProjectListComponent } from './project-list/project-list.component'
import { ProjectCreateComponent } from './project-create/project-create.component'

const projectModuleRoutes: Routes = [
    {
        path: 'project',
        component: ProjectComponent,
        children: [
            { path: '', component: ProjectListComponent },
            { path: 'create', component: ProjectCreateComponent }
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
    ProjectCreateComponent
  ]
})
export class ProjectModule { }
