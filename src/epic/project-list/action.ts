import axios from "axios";
import { PROJECT_LIST_DATA } from "../../data/project";

import { PROJECT_LIST_URL } from "./constatns";

export const getProjectListAction = async (): Promise<PROJECT_LIST_DATA> =>
  await axios.get(PROJECT_LIST_URL).then((res) => res.data);
