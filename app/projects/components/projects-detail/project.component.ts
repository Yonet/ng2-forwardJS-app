import { Component, OnInit } from "angular2/core";
import { RouteParams } from "angular2/router";

import { ProjectsService } from "../../services/projects.service";
import {Project} from "../../services/project-model";


@Component({
    selector: 'project-detail',
    template: `
    <div *ngIf="project">
        <h2>{{ title }}</h2>
        <p>Week {{ project.id}} - {{ project.name }}</p>
        <p>{{ project | json }}</p>
    </div>

    `
})

export class ProjectDetailComponent implements OnInit {
    title:string;
    id:number;
    project: Project;

    constructor(private _projectsService:ProjectsService, private _routeParams:RouteParams) {
        this.title = "Project Detail Page";
    }

    getProject() {
        this.id = +this._routeParams.get('id');
        this._projectsService.getProject(this.id).then(project => this.project = project)
        return this.project;
    }

    ngOnInit() {
        this.project = this.getProject();
    }
}