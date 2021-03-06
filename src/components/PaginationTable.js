import { useMemo } from 'react';
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

export default function PaginationTable() {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    pageCount,
    state,
    prepareRow
  } = useTable({
    columns,
    data,
   }, usePagination);

  const { pageIndex, pageSize } = state;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <span>Page <strong>{pageIndex + 1} of {pageOptions.length} </strong></span>
        <span>
          | Go to page: {' '}
          <input
            type="number"
            min={1}
            max={pageCount}
            step={1}
            value={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? +(e.target.value) - 1 : 0;
              gotoPage(pageNumber)
            }}
            style={{ width: 50 }}
          />
        </span>
        <select value={pageSize} onChange={e => setPageSize(+e.target.value)}>
          {[10, 20, 50].map(pageSize => <option key={pageSize} value={pageSize}>Show {pageSize}</option>)}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={previousPage} disabled={!canPreviousPage}>Prvious</button>
        <button onClick={nextPage} disabled={!canNextPage}>Next</button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
    </>
  );
}