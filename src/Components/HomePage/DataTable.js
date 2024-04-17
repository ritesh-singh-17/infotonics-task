import React from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import Employees from "../../Data/DataTableData";

const data = Employees;
const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Position", accessor: "position" },
  { Header: "Office", accessor: "office" },
  { Header: "Age", accessor: "age" },
  { Header: "Start date", accessor: "startDate" },
  { Header: "Salary", accessor: "salary" },
];

const DataTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    gotoPage,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <select
            id="entries"
            value={pageSize}
            className="datatable-selector"
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
          <label htmlFor="entries" className="me-2">
            entries per page
          </label>
        </div>
        <input
          value={globalFilter || ""}
          className="datatable-input w-25"
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <table {...getTableProps()} className="table table-bordered">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center">
        <div>
          Showing {pageIndex * pageSize + 1} to{" "}
          {(pageIndex + 1) * pageSize > data.length
            ? data.length
            : (pageIndex + 1) * pageSize}{" "}
          of {data.length} entries
        </div>
        <div className="pagination">
          <button
            disabled={pageIndex === 0}
            onClick={() => gotoPage(0)}
            className={`${pageIndex === 0 ? "active" : ""}`}
          >
            1
          </button>
          {Array.from(
            { length: Math.ceil(data.length / pageSize) - 2 },
            (_, i) => i + 2
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              disabled={pageIndex === pageNumber - 1}
              onClick={() => gotoPage(pageNumber - 1)}
              className={`${pageIndex === pageNumber - 1 ? "active" : ""}`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            disabled={pageIndex === Math.ceil(data.length / pageSize) - 1}
            onClick={() => gotoPage(Math.ceil(data.length / pageSize) - 1)}
            className={`${
              pageIndex === Math.ceil(data.length / pageSize) - 1
                ? "active"
                : ""
            }`}
          >
            {Math.ceil(data.length / pageSize)}
          </button>
          <button disabled={!canNextPage} onClick={() => nextPage()}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default DataTable;
