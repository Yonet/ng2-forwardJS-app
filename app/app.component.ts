/**
 * Created by yoneta on 2/7/16.
 */
import { Component } from 'angular2/core';
import { ProjectsComponent } from 'app/projects/components/projects-list/projects.component';

@Component({
    selector: 'my-app',
    directives: [ProjectsComponent],
    template: `
    <div>
        <h1>{{title}}</h1>
        <projects-list></projects-list>
    </div>
    `,
    styles: [`
        h1 {
            border-bottom: 1px solid #ddd;
            padding: 10px;
        }
    `]
})

export class AppComponent {

    public title = 'ForwardJS App';

}