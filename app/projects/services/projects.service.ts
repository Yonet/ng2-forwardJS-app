import {Project} from './project-model';
import {PROJECTS} from "./mock-data";
import {Injectable} from "angular2/core";

@Injectable()
export class ProjectsService {
    getProjects() {
        return Promise.resolve(PROJECTS);
    }
}