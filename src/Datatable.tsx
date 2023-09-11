interface IDataTableProps<T extends Record<string, any>> {
  data: T[];
}

function DataTable<T extends Record<string, any>>({
  data,
}: IDataTableProps<T>) {
  // Assuming data is an array of objects where keys are column names
  const columns = data[0] ? Object.keys(data[0]) : [];

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
        {data.map((row, rowIndex) => (
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
    </table>
  );
}

export default DataTable;
