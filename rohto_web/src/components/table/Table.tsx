import React from 'react';
import { TableProps, ColumsTable, DataSourceTable } from './TableModel';

const Table: React.FC<TableProps> = ({ columns, dataSource, isShowIconFilter }) => {
  return (
    <>
      <div className="wrap-table wrap-table--line">
        <table>
          <thead>
            <tr>
              {columns &&
                columns.map((itemColumns: ColumsTable) => (
                  <th key={itemColumns.key}>
                    <div className="cursor-pointer font-size-14">
                      {itemColumns.title}{' '}
                      {isShowIconFilter && <i className="icon-filter-dropdown ml-4 font-size-6"></i>}
                    </div>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {dataSource &&
              dataSource.map((itemData: DataSourceTable) => (
                <tr key={itemData.id}>
                  {itemData &&
                    Object.keys(itemData).map((item: any, index: number) => (
                      <td key={index} data-name={`${columns && columns[index].title}`}>
                        {itemData[item]}
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
