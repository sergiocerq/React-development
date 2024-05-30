import React from "react";
import { TableRenderizable } from "../data/classes";
import "../index.css";

interface DynamicTableProps {
  renderContext: TableRenderizable[];
}

export const DynamicTable: React.FC<DynamicTableProps> = ({
  renderContext,
}) => {
  const columns = renderContext[0].getTableColumnsProperties();

  return (
    <>
      <table className="table">
        <thead className="header-table">
          <tr className="line-header-table">
            {columns.map((column, index) => (
              <th key={index} >
                <p>{column.label}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="body-table">
          {renderContext.map((item, index) => (
            <tr key={index} className="line-body-table">
              {columns.map((column, index) => (
                <td key={index}>
                  <p>{item[column.name]}</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
