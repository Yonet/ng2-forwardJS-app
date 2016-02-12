import {Injectable} from "angular2/core";

import {Project} from './project-model';
import {PROJECTS} from "./mock-data";


@Injectable()
export class ProjectsService {
    getProjects() {
        return Promise.resolve(PROJECTS);
    }
    getProject(id: number){
        return Promise.resolve(PROJECTS).then(
            //Filter returns an array of filtered results
            projects => projects.filter(project => project.id === id)[0]
        )
    }
}
