import axios from "axios";
import {
  PROJECT_CREATE,
  PROJECT_CREATE_RESPONSE,
  PROJECT_ITEM_DATA_SHORT,
} from "../../data/project";
import {
  IDeleteProject,
  IGetProjectData,
  IUpdateProject,
  PROJECT_DATA_URL,
  PROJECT_DELETE_URL,
  PROJECT_UPDATE_URL,
} from "./constants";

export const getProjectDataAction = async ({
  projectId,
}: IGetProjectData): Promise<PROJECT_ITEM_DATA_SHORT> =>
  await axios.get(PROJECT_DATA_URL(projectId)).then((res) => res.data);

export const updateProjectAction = async ({
  projectId,
  data,
}: IUpdateProject): Promise<PROJECT_CREATE_RESPONSE> =>
  await axios.patch(PROJECT_UPDATE_URL(projectId), data);

export const deleteProejctAction = async ({
  projectId,
}: IDeleteProject): Promise<void> =>
  await axios.delete(PROJECT_DELETE_URL(projectId));
