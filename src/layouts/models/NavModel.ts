export interface NavItem {
  name: string;
  section?: string;
  url: string;
  icon?: JSX.Element | string;
  children?: Array<any>;
  menus?: Array<any>;
  id?: number;
}
