import axios from "axios";
import { PROJECT_ITEM_DATA } from "../../data/project";
import { IGetProjectData, PROJECT_DATA_URL } from "./constants";

export const getProjectDataAction = async ({
  projectId,
}: IGetProjectData): Promise<PROJECT_ITEM_DATA> =>
  await axios.get(PROJECT_DATA_URL(projectId)).then((res) => res.data);
