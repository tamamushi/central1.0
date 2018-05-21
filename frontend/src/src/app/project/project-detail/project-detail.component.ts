/** vim: set ts=4 sw=4 sts=4 et sta ai fenc=utf-8:
 *
 *  @ngdoc component
 *  @module
 *  @name ProjectDetailComponent
 *  @description
 *
 *  @file project-detail.component.ts
 *
**/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../../core/biz/project.service';
import { Project } from '../../core/model/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

    public project: Project;

    constructor(
    private _route: ActivatedRoute,
    private _service: ProjectService
    ) { }

    ngOnInit() {
        var id = this._route.snapshot.paramMap.get('id');
        this._service.findProjectById(Number(id))
            .then(r => { this.project = r; });
    }
}
