import { Component } from "angular2/core";

@Component({
    selector: 'project-detail',
    template: `
        <h2>{{ title }}</h2>
    `
})

export class ProjectDetailComponent{
    public title = "Project Detail Page";
    constructor(){
        console.log('detail page');
    }
}