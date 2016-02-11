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
    public title = "Projects List";
    public projects = PROJECTS;
    public newProject = '';

    onSubmit(newName){
        const i = this.projects.length + 1;
        this.projects.push({id: i, name: newName});
        console.log('newProject is', this.newProject);
        this.newProject = '';
    }

}

/**
 * Projects array with the type project
 * @type {{id: number, name: string}[]}
 */
var PROJECTS: Project[] = [
    {id: 1, name: "Class Intro"},
    {id: 2, name: "HTML"},
    {id: 3, name: "CSS"},
    {id: 4, name: "JS"},
    {id: 5, name: "JQuery"},
    {id: 6, name: "Angular"}
];