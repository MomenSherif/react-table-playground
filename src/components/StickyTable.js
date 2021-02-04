import { useMemo } from 'react';
import { useTable, useBlockLayout } from "react-table";
import { useSticky } from 'react-table-sticky';
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

export default function StickyTable() {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data,
  }, useBlockLayout, useSticky);

  const firstPageRows = useMemo(() => rows.slice(0, 20), [rows]);

  return (
    <div {...getTableProps()} className="table sticky" style={{ maxWidth: 1000, height: 500 }}>
      <div className="header">
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map((column) => (
              <div {...column.getHeaderProps()} className="th">
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()} className="body">
        {firstPageRows.map((row) => {
          prepareRow(row);
          return (
            <div {...row.getRowProps()} className="tr">
              {row.cells.map((cell) => (
                <div {...cell.getCellProps()} className="td">
                  {cell.render('Cell')}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}