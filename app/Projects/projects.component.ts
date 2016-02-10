/**
 * Created by yoneta on 2/7/16.
 */
import { Component } from 'angular2/core';

interface Project {
    id: number;
    name: string;
}

@Component({
    selector: 'projects-list',
    templateUrl: 'app/projects/projects.component.html',
    stylesUrl: 'app/projects/projects.component.css'
})

export class ProjectsComponent {
    /**
     * Variable name is 'project' and type is 'Project' defined in the interface
     * @type {{id: number, name: string}}
     */
    public project: Project = {
        id: 1,
        name: "Demo Project"
    }

}