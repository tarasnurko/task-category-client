import axios from "axios";
import {
  CATEGORY_CREATE_RESPONSE,
  CATEGORY_LIST_DATA,
} from "../../data/category/constants";
import {
  CATEGORY_CREATE_URL,
  CATEGORY_DELETE_URL,
  CATEGORY_LIST_URL,
  ICreateCategory,
  IDeleteCategory,
  IGetCategoryList,
} from "./constatns";

export const getCategoryListAction = async ({
  projectId,
}: IGetCategoryList): Promise<CATEGORY_LIST_DATA> =>
  axios.get(CATEGORY_LIST_URL(projectId)).then((res) => res.data);

export const createCategoryAction = async ({
  projectId,
  data,
}: ICreateCategory): Promise<CATEGORY_CREATE_RESPONSE> =>
  await axios.post(CATEGORY_CREATE_URL(projectId), data);

export const deleteCategoryAction = async ({
  projectId,
  categoryId,
}: IDeleteCategory): Promise<void> =>
  await axios.delete(CATEGORY_DELETE_URL({ projectId, categoryId }));
