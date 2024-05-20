import React from 'react'
import { TableRenderizable } from '../data/classes';

interface DynamicTableProps {
  renderContext: TableRenderizable[];
}

export const DynamicTable: React.FC<DynamicTableProps> = ({ renderContext }) => {

  const columns = renderContext[0].getTableColumnsProperties();

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderContext.map((item, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{item[column.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}