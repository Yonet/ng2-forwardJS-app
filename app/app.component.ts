/**
 * Created by yoneta on 2/7/16.
 */
import { Component } from 'angular2/core';

@Component({
    selector: 'my-app'
    template:'<h1>{{title}}</h1>'
})

export class AppComponent {
    public title = 'Projects';
}