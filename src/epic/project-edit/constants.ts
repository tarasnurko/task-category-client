import { PROJECT_CREATE } from "../../data/project";

export const PROJECT_DATA_URL = (projectId: string): string =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}`;

export const PROJECT_UPDATE_URL = (projectId: string): string =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}`;

export const PROJECT_DELETE_URL = (projectId: string): string =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}`;

export interface IGetProjectData {
  projectId: string;
}

export interface IUpdateProject {
  projectId: string;
  data: PROJECT_CREATE;
}

export interface IDeleteProject {
  projectId: string;
}
