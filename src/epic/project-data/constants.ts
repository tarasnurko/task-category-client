export const PROJECT_DATA_URL = (projectId: string): string =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}`;

export interface IGetProjectData {
  projectId: string;
}
