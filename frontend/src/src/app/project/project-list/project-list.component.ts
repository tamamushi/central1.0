/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc component
 *  @module
 *  @name ProjectListComponent
 *  @description
 *
 *  @file project-list.component.ts
 *
**/

import { Component, Inject, OnInit } from '@angular/core';
import { ProjectService } from '../../core/biz/project.service';
import { Project } from '../../core/model/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

    public projects: Project[];

    constructor(
        private _service:ProjectService
    ) { }

    // 画面描画時にデータ一覧を取得
    ngOnInit() {
        this.projects = this._service.fetchProjects();
    }
}
