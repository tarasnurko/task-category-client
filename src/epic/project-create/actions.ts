import axios from "axios";
import { PROJECT_CREATE } from "../../data/project";
import { PROJECT_CREATE_RESPONSE } from "../../data/project";
import { PROJECT_CREATE_URL } from "./constatnst";

export const createProjectAction = async (
  data: PROJECT_CREATE
): Promise<PROJECT_CREATE_RESPONSE> =>
  await axios.post(PROJECT_CREATE_URL, data);
