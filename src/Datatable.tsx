import React, { useState } from "react";
import ChevronDoubleLeft from "./icons/chevron-double-left.svg";
import ChevronLeft from "./icons/chevron-left.svg";
import ChevronDoubleRight from "./icons/chevron-double-right.svg";
import ChevronRight from "./icons/chevron-right.svg";
import ChevronUpDown from "./icons/chevron-up-down.svg";
import ChevronUp from "./icons/chevron-up.svg";
import ChevronDown from "./icons/chevron-down.svg";

type ColumnType<T> = React.ReactElement<IColumnProps<T>>;

export interface IDataTableProps<T extends Record<string, any>> {
  data: T[];
  columns?: IColumnProps<T>[];
  pagination?: boolean;
  search?: boolean;
  children?: ColumnType<T>[] | ColumnType<T>;
}

export interface IColumnProps<T> {
  id: string | number;
  name: string;
  accessor: string;
  sortable?: boolean;
  render?: (data: T, index: number) => React.ReactNode;
}

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pagination = false,
  search = false,
  children,
}: IDataTableProps<T>) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<{
    key: string | number;
    direction: "asc" | "desc";
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // const simpleColumns = data[0] ? Object.keys(data[0]) : [];
  if (children) {
    columns = React.Children.map(children, (child) => child.props);
  }

  const numPages = Math.ceil(data.length / pageSize);
  const simpleTable = !columns;
  const simpleColumns = simpleTable && data[0] ? Object.keys(data[0]) : [];

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1);
  };

  function goto(page: 1 | -1 | "first" | "last") {
    if (page === "first") {
      setCurrentPage(1);
      return;
    }

    if (page === "last") {
      setCurrentPage(numPages);
      return;
    }

    setCurrentPage(Math.min(Math.max(currentPage + page, 1), numPages));
  }

  function handleSort(key: string | number) {
    setSort((sort) => {
      if (sort?.key === key) {
        return { key, direction: sort.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function renderTableHeaderCells() {
    if (columns) {
      return columns.map((column, index) => {
        return column.sortable ? (
          <th
            key={index}
            className="flex cursor-pointer items-center p-2 text-left capitalize text-gray-600 dark:text-gray-200"
            onClick={() => handleSort(column.accessor)}
          >
            {column.name}
            {!sort ? (
              <ChevronUpDown />
            ) : sort.direction === "asc" ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </th>
        ) : (
          <th
            key={index}
            className="p-2 text-left capitalize text-gray-600 dark:text-gray-200"
          >
            {column.name}
          </th>
        );
      });
    }
    return simpleColumns.map((name, index) => (
      <th
        key={index}
        className="p-2 text-left capitalize text-gray-600 dark:text-gray-200"
      >
        {name}
      </th>
    ));
  }

  function renderTableBodyCells() {
    if (columns) {
      return itemsToDisplay.length ? (
        itemsToDisplay.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="min-h-[48px] border-b border-solid border-gray-200 dark:border-gray-400"
          >
            {columns!.map((column, columnIndex) => (
              <td className="p-2" key={columnIndex}>
                {column.render
                  ? column.render(row, columnIndex)
                  : row[column.accessor]}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td className="p-2 text-center" colSpan={columns.length}>
            No Items To display...
          </td>
        </tr>
      );
    }

    return itemsToDisplay.length ? (
      itemsToDisplay.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className="min-h-[48px] border-b border-solid border-gray-200 dark:border-gray-400"
        >
          {simpleColumns.map((name, columnIndex) => (
            <td className="p-2" key={columnIndex}>
              {row[name]}
            </td>
          ))}
        </tr>
      ))
    ) : (
      <tr>
        <td className="p-2 text-center" colSpan={data.length}>
          No Items To display...
        </td>
      </tr>
    );
  }

  const filteredData = searchTerm
    ? data.filter((item) => {
        if (columns) {
          return columns.some((column) => {
            return String(item[column.accessor])
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          });
        }
        return Object.entries(item).some((cellValue) => {
          return String(cellValue)
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase());
        });
      })
    : data;

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sort) return 1;
    if (sort?.direction === "asc") {
      return a[sort.key] > b[sort.key] ? 1 : -1;
    } else {
      return a[sort.key] < b[sort.key] ? 1 : -1;
    }
  });

  const itemsToDisplay = pagination
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  return (
    <div className="w-full overflow-x-auto border border-gray-200 p-4">
      {search && (
        <div className="flex flex-row-reverse">
          <input
            type="search"
            placeholder="Search.."
            className=" border-b border-gray-800 outline-none dark:border-white dark:bg-black dark:text-white"
            onChange={handleSearch}
          />
        </div>
      )}
      <table className=" w-full flex-col overflow-x-scroll whitespace-nowrap  bg-white text-black dark:bg-black dark:text-white">
        <thead className="">
          <tr className="min-h-[52px] w-full border-b border-solid border-gray-800  text-lg dark:border-gray-400">
            {renderTableHeaderCells()}
          </tr>
        </thead>
        <tbody>{renderTableBodyCells()}</tbody>
        <tfoot>
          {pagination && (
            <tr>
              <td
                colSpan={simpleTable ? simpleColumns.length : columns?.length}
              >
                <div className="mt-2 flex w-full flex-row-reverse p-2">
                  <span className="ml-4">
                    Rows per page:
                    <select
                      className="dark:bg-black"
                      onChange={handlePageSizeChange}
                      value={pageSize}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </span>
                  <span className="ml-4">
                    {(currentPage - 1) * pageSize + 1} -{" "}
                    {Math.min(currentPage * pageSize, itemsToDisplay.length)} of{" "}
                    {itemsToDisplay.length}
                  </span>
                  <span className="flex">
                    <button
                      disabled={currentPage === 1}
                      className={
                        currentPage === 1 ? "text-gray-400" : "dark:text-white"
                      }
                      onClick={() => goto("first")}
                    >
                      <ChevronDoubleLeft />
                    </button>
                    <button
                      disabled={currentPage === 1}
                      className={
                        currentPage === 1 ? "text-gray-400" : "dark:text-white"
                      }
                      onClick={() => goto(-1)}
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      disabled={currentPage === numPages}
                      className={
                        currentPage === numPages
                          ? "text-gray-400"
                          : "dark:text-white"
                      }
                      onClick={() => goto(1)}
                    >
                      <ChevronRight />
                    </button>
                    <button
                      disabled={currentPage === numPages}
                      className={
                        currentPage === numPages
                          ? "text-gray-400"
                          : "dark:text-white"
                      }
                      onClick={() => goto("last")}
                    >
                      <ChevronDoubleRight />
                    </button>
                  </span>
                </div>
              </td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
}

function Column<T>(_: IColumnProps<T>) {
  return null;
}

DataTable.Column = Column;

export default DataTable;
