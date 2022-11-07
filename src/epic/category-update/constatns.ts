import { CATEGORY_CREATE, CATEGORY_UPDATE } from "../../data/category";

export const CATEGORY_LIST_URL = (projectId: string) =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}/categories`;

export const CATEGORY_CREATE_URL = (projectId: string) =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}/categories`;

export const CATEGORY_UPDATE_URL = ({
  projectId,
  categoryId,
}: {
  projectId: string;
  categoryId: string;
}) =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}/categories/${categoryId}`;

export const CATEGORY_DELETE_URL = ({
  projectId,
  categoryId,
}: {
  projectId: string;
  categoryId: string;
}) =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}/categories/${categoryId}`;

export interface IGetCategoryList {
  projectId: string;
}

export interface ICreateCategory {
  projectId: string;
  data: CATEGORY_CREATE;
}

export interface IUpdateCategory {
  projectId: string;
  categoryId: string;
  data: CATEGORY_UPDATE;
}

export interface IDeleteCategory {
  projectId: string;
  categoryId: string;
}

export interface IError {
  message?: string;
}
