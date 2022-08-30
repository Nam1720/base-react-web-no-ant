import { ACTION_CRUD } from './constants';

export interface FilterListInit {
  page: number;
  limit: number;
  keyword: string;
  sort: string;
  column: string;
}

export interface ObjAny {
  [key: string]: any;
}

export interface ParamsFilterModel {
  page: number;
  per_page: number;
  [name: string]: any;
}

export interface ParamsDefault {
  pageIndex?: number;
  pageSize?: number;
  totalPage?: number;
  totalRecord?: number;
  [name: string]: any;
}

export interface actionModal extends ObjAny {
  id?: number;
  index?: number;
  type: ACTION_CRUD;
  isVisible?: boolean;
}

export type Nullable<T> = T | null;

export interface RouteProps {
  path: string;
  name?: string;
  component: React.FC;
  middleware?: any;
}

export const STATUS = {
  IS_ACTIVE: 1,
  NOT_ACTIVE: 0,
};

export interface countryModel {
  id: number;
  country_name: string;
}

export interface provinceModel {
  id: number;
  province_name: string;
}
export interface districtModel {
  id: number;
  district_name: string;
}

export interface paginationModel extends ObjAny {
  links: {
    first: string;
    last: string;
    prev: Nullable<number>;
    next: Nullable<number>;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: Nullable<string>;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface SelectOptionModel {
  value: number;
  label: string;
  key: number;
}

export interface OptionAutocompleteModel {
  label: string;
  value: string;
}

export interface DetaiTabMenuModel {
  id: number;
  title: string;
}

export interface TabMenuProps {
  listMenu: DetaiTabMenuModel[];
  acTabMenuActive: (data: number) => void;
  typeButton?: boolean;
}
