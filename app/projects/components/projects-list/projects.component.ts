/**
 * Created by yoneta on 2/7/16.
 */
import { Component, OnInit } from 'angular2/core';
import { Router } from "angular2/router";

import { Project } from '../../services/project-model';
import { ProjectsService } from '../../services/projects.service';


@Component({
    selector: 'projects-list',
    templateUrl: 'app/projects/components/projects-list/projects.component.html',
    stylesUrl: 'app/projects/components/projects-list/projects.component.css'
})

export class ProjectsComponent implements OnInit {

    title: string;
    newProject: string;
    projects: Project[];

    constructor(private _projectsService: ProjectsService, private _router: Router) {
        this.title = "Projects List View";
        this.newProject = '';
    }

    getProjects() {
        this._projectsService.getProjects().then(projects => this.projects = projects);
        return this.projects;
    }

    ngOnInit() {
        this.projects = this.getProjects();
    }

    onSubmit(newName) {
        const i = this.projects.length + 1;
        this.projects.push({id: i, name: newName});
        console.log('newProject is', this.newProject);
        this.newProject = '';
    }

    goToDetail(project) {
        this._router.navigate(['Project', { id: project.id }]);
    }

}

