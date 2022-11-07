export interface CATEGORY_ITEM {
  id: number;
  text: string;
}

export interface CATEGORY_CREATE {
  text: string;
}

export interface CATEGORY_CREATE_RESPONSE {
  id: number;
  text: string;
  created_at: Date;
}

export interface CATEGORY_UPDATE {
  text: string;
}

export interface CATEGORY_UPDATE_RESPONSE {
  id: number;
  text: string;
  created_at: Date;
}

export type CATEGORY_LIST = CATEGORY_ITEM[];

export interface CATEGORY_LIST_DATA {
  list: Array<CATEGORY_ITEM>;
}
