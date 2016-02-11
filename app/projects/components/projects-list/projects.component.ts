/**
 * Created by yoneta on 2/7/16.
 */
import {Project} from 'app/projects/services/project-model';
import { ProjectsService } from 'app/projects/services/projects.service';
import { Component, OnInit } from 'angular2/core';


@Component({
    selector: 'projects-list',
    templateUrl: 'app/projects/components/projects-list/projects.component.html',
    stylesUrl: 'app/projects/components/projects-list/projects.component.css',
    providers: [ProjectsService]
})

export class ProjectsComponent implements OnInit {
    public title = "Projects List View";
    public newProject = '';
    public projects:Project[];

    constructor(private _projectsService:ProjectsService) {
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

}

