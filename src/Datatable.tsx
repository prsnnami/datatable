import { useState } from "react";
import ChevronDoubleLeft from "./icons/chevron-double-left.svg";
import ChevronLeft from "./icons/chevron-left.svg";
import ChevronDoubleRight from "./icons/chevron-double-right.svg";
import ChevronRight from "./icons/chevron-right.svg";

interface IDataTableProps<T extends Record<string, any>> {
  data: T[];
}

function DataTable<T extends Record<string, any>>({
  data,
}: IDataTableProps<T>) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const columns = data[0] ? Object.keys(data[0]) : [];

  const numPages = Math.ceil(data.length / pageSize);

  const itemsToDisplay = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

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

  return (
    <table className="w-full">
      <thead>
        <tr className="min-h-[52px] w-full border-b border-solid border-gray-200">
          {columns.map((column, index) => (
            <th key={index} className="p-2 text-left capitalize text-gray-600">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {itemsToDisplay.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="min-h-[48px] border-b border-solid border-gray-200"
          >
            {columns.map((column, columnIndex) => (
              <td className="p-2" key={columnIndex}>
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <div className="flex">
          <span>
            Rows per page:
            <select onChange={handlePageSizeChange} value={pageSize}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </span>
          <span>
            {(currentPage - 1) * pageSize + 1} -{" "}
            {Math.min(currentPage * pageSize, data.length)} of {data.length}
          </span>
          <span className="flex">
            <button
              disabled={currentPage === 1}
              className={currentPage === 1 ? "text-gray-400" : ""}
              onClick={() => goto("first")}
            >
              <ChevronDoubleLeft />
            </button>
            <button
              disabled={currentPage === 1}
              className={currentPage === 1 ? "text-gray-400" : ""}
              onClick={() => goto(-1)}
            >
              <ChevronLeft />
            </button>
            <button
              disabled={currentPage === numPages}
              className={currentPage === numPages ? "text-gray-400" : ""}
              onClick={() => goto(1)}
            >
              <ChevronRight />
            </button>
            <button
              disabled={currentPage === numPages}
              className={currentPage === numPages ? "text-gray-400" : ""}
              onClick={() => goto("last")}
            >
              <ChevronDoubleRight />
            </button>
          </span>
        </div>
      </tfoot>
    </table>
  );
}

export default DataTable;
