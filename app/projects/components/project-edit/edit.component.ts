/**
 * Created by yoneta on 2/13/16.
 */
import { Component, Input, Output, EventEmitter } from "angular2/core";
import {Project} from "../../services/project-model";

@Component({
    selector: 'edit-detail',
    template: `
    <form action="" (submit)="emitEvent(detail)">
        <input type="text"  placeholder="Change name" [(ngModel)]="detail.name">{{ detail | json}}
    </form>
    `
})

export class EditProjectComponent {
    @Input() detail:string;
    @Output() detailChanged = new EventEmitter();

    constructor() {
        console.log('project', this.detail);
    }

    emitEvent() {
        this.detailChanged.emit(this.detail);
    }
}
