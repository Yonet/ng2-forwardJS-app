/**
 * Created by yoneta on 2/7/16.
 */
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import { Project } from './projects/services/project-model';
import { ProjectsService } from './projects/services/projects.service';
import { ProjectsComponent } from './projects/components/projects-list/projects.component';
import { ProjectDetailComponent } from "./projects/components/projects-detail/project.component";


@Component({
    selector: 'my-app',
    template: `
    <div>
        <md-toolbar class="fixed-toolbar"><div class="md-toolbar-tools"><span class="verbose-title">{{title}}</span></div></md-toolbar>
        <router-outlet></router-outlet>
    </div>
    `,
    styles: [`
        .verbose-title{
            font-size:20px;
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