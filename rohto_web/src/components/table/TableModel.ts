import { Nullable } from 'store/common/interface';

export interface ColumsTable {
  title?: Nullable<string>;
  dataIndex?: Nullable<string>;
  key?: Nullable<string>;
  [name: string]: any;
}

export interface DataSourceTable {
  id?: Nullable<number>;
  name?: Nullable<string>;
  [name: string]: any;
}

export interface TableProps {
  columns?: ColumsTable[] | [];
  dataSource?: DataSourceTable[];
  isShowIconFilter?: boolean;
  [name: string]: any;
}
