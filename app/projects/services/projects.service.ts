import {Injectable} from "angular2/core";

import {Project} from './project-model';
import {PROJECTS} from "./mock-data";


@Injectable()
export class ProjectsService {
    getProjects() {
        return Promise.resolve(PROJECTS);
    }
}