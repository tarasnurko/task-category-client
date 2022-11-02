import { AxiosError } from "axios";
import { CATEGORY_CREATE } from "../../data/category";

export const CATEGORY_LIST_URL = (projectId: string): string =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}/categories`;

export const CATEGORY_CREATE_URL = (projectId: string): string =>
  `https://category-task-server.herokuapp.com/api/projects/${projectId}/categories`;

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

export interface IDeleteCategory {
  projectId: string;
  categoryId: string;
}

export interface ICreateCategoryError {
  message?: string;
}

export interface IDeleteCategoryError {
  message?: string;
}
