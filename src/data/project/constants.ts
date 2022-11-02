import { CATEGORY_LIST } from "../category/constants";

export interface PROJECT_ITEM_DATA {
  id: number;
  name: string;
  text: string;
  categories: CATEGORY_LIST;
}

export interface PROJECT_ITEM_DATA_SHORT {
  id: number;
  name: string;
  text: string;
}

export type PROJECT_LIST_DATA = {
  list: PROJECT_ITEM_DATA_SHORT[];
};

export interface PROJECT_CREATE {
  name: string;
  text: string;
}

export interface PROJECT_CREATE_RESPONSE {
  id: number;
  name: string;
  text: string;
  created_at: Date;
}

export interface PROJECT_UPDATE {
  name: string;
  text: string;
}

export interface PROJECT_UPDATE_RESPONSE {
  id: number;
  name: string;
  text: string;
  created_at: Date;
}
