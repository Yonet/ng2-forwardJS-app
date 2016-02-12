/**
 * Created by yoneta on 2/7/16.
 */
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { Project } from './projects/services/project-model';
import { ProjectsService } from './projects/services/projects.service';
import { ProjectsComponent } from './projects/components/projects-list/projects.component';
import { ProjectDetailComponent } from "./projects/components/projects-detail/project.component";


@Component({
    selector: 'my-app',
    template: `
    <div>
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
    </div>
    `,
    styles: [`
        h1 {
            border-bottom: 1px solid #ddd;
            padding: 10px;
        }
    `],
    directives: [ProjectsComponent, ROUTER_DIRECTIVES],
    providers: [ProjectsService, ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/projects', name: 'Projects', component: ProjectsComponent, useAsDefault: true },
    { path: '/project/:id', name: 'Project', component: ProjectDetailComponent }
])

export class AppComponent {
    public title = 'ForwardJS App';
}