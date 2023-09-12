import DataTable from "./Datatable";
import { CodeBlock, atomOneDark, atomOneLight } from "react-code-blocks";

import "./index.css";
import { useState } from "react";

const dataTableData = [
  {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    experience: 5,
    location: "New York",
  },
  {
    name: "Jane Doe",
    age: 28,
    occupation: "Data Scientist",
    experience: 3,
    location: "San Francisco",
  },
  {
    name: "Bob Smith",
    age: 35,
    occupation: "Product Manager",
    experience: 7,
    location: "Chicago",
  },
  {
    name: "Alice Johnson",
    age: 32,
    occupation: "UX Designer",
    experience: 4,
    location: "Seattle",
  },
  {
    name: "Charlie Brown",
    age: 29,
    occupation: "Web Developer",
    experience: 2,
    location: "Austin",
  },
  {
    name: "David Williams",
    age: 40,
    occupation: "System Analyst",
    experience: 10,
    location: "Boston",
  },
  {
    name: "Eva Green",
    age: 34,
    occupation: "Database Administrator",
    experience: 6,
    location: "Los Angeles",
  },
  {
    name: "Frank Miller",
    age: 36,
    occupation: "Network Engineer",
    experience: 8,
    location: "Denver",
  },
  {
    name: "Grace Hopper",
    age: 42,
    occupation: "Software Architect",
    experience: 12,
    location: "San Diego",
  },
  {
    name: "Helen Parker",
    age: 38,
    occupation: "IT Manager",
    experience: 9,
    location: "Dallas",
  },
  {
    name: "Ivan Petrov",
    age: 33,
    occupation: "Security Specialist",
    experience: 5,
    location: "Phoenix",
  },
  {
    name: "Jackie Chan",
    age: 37,
    occupation: "Mobile Developer",
    experience: 7,
    location: "San Jose",
  },
  {
    name: "Kevin Hart",
    age: 39,
    occupation: "Data Analyst",
    experience: 8,
    location: "Jacksonville",
  },
  {
    name: "Liam Neeson",
    age: 41,
    occupation: "Business Analyst",
    experience: 10,
    location: "San Francisco",
  },
  {
    name: "Mia Wallace",
    age: 35,
    occupation: "Quality Assurance",
    experience: 6,
    location: "Indianapolis",
  },
  {
    name: "Nina Simone",
    age: 43,
    occupation: "Product Owner",
    experience: 11,
    location: "Columbus",
  },
  {
    name: "Oscar Wilde",
    age: 44,
    occupation: "Scrum Master",
    experience: 12,
    location: "Fort Worth",
  },
  {
    name: "Paul McCartney",
    age: 45,
    occupation: "DevOps Engineer",
    experience: 13,
    location: "Charlotte",
  },
  {
    name: "Quincy Jones",
    age: 46,
    occupation: "Technical Writer",
    experience: 14,
    location: "Detroit",
  },
  {
    name: "Rihanna Fenty",
    age: 47,
    occupation: "SEO Specialist",
    experience: 15,
    location: "El Paso",
  },
  {
    name: "Steve Jobs",
    age: 48,
    occupation: "Entrepreneur",
    experience: 16,
    location: "Memphis",
  },
  {
    name: "Tina Turner",
    age: 49,
    occupation: "Project Manager",
    experience: 17,
    location: "Boston",
  },
  {
    name: "Uma Thurman",
    age: 50,
    occupation: "Software Tester",
    experience: 18,
    location: "Seattle",
  },
  {
    name: "Vin Diesel",
    age: 51,
    occupation: "System Administrator",
    experience: 19,
    location: "Denver",
  },
];

const columns1 = [
  {
    id: 1,
    name: "Name",
    accessor: "name",
  },
  {
    id: 2,
    name: "Age",
    accessor: "age",
  },
  {
    id: 3,
    name: "Occupation",
    accessor: "occupation",
  },
];

const columns2 = [
  {
    id: 1,
    name: "Name",
    accessor: "name",
    sortable: true,
  },
  {
    id: 2,
    name: "Age",
    accessor: "age",
  },
  {
    id: 3,
    name: "Occupation",
    accessor: "occupation",
  },
  {
    id: 4,
    name: "Location",
    accessor: "location",
  },
];

const columns3 = [
  {
    id: 1,
    name: "Name",
    accessor: "name",
    sortable: true,
  },
  {
    id: 2,
    name: "Age",
    accessor: "age",
  },
  {
    id: 3,
    name: "Occupation",
    accessor: "occupation",
  },
  {
    id: 4,
    name: "Location",
    accessor: "location",
  },
  {
    id: 5,
    name: "Experience",
    accessor: "experience",
    render: (x: any) =>
      x.experience > 6
        ? "Senior"
        : x.experience > 3
        ? "Intermediate"
        : "Junior",
  },
];

const columnsCodeBlock = `
const columns = [
  {
    id: 1,
    name: "Name",
    accessor: "name",
  },
  {
    id: 2,
    name: "Age",
    accessor: "age",
  },
  {
    id: 3,
    name: "Occupation",
    accessor: "occupation",
  },
];
<DataTable data={tableData} columns={columns} search pagination />
`;

const sortableColumnsCodeBlock = `
const columns = [
  {
    id: 1,
    name: "Name",
    accessor: "name",
    sortable: true
  },
  {
    id: 2,
    name: "Age",
    accessor: "age",
  },
  {
    id: 3,
    name: "Occupation",
    accessor: "occupation",
  },
  {
    id: 4,
    name: 'Address',
    accessor: 'location'
  }
];
<DataTable data={tableData} columns={columns} search pagination />
`;

const customSlotsCodeBlock = `
const columns = [
  {
    id: 1,
    name: "Name",
    accessor: "name",
    sortable: true,
  },
  {
    id: 2,
    name: "Age",
    accessor: "age",
  },
  {
    id: 3,
    name: "Occupation",
    accessor: "occupation",
  },
  {
    id: 4,
    name: "Location",
    accessor: "location",
  },
  {
    id: 5,
    name: "Experience",
    accessor: "experience",
    render: (x: any) =>
      x.experience > 6
        ? "Senior"
        : x.experience > 3
        ? "Intermediate"
        : "Junior",
  },
];
<DataTable data={tableData} columns={columns} search pagination />
`;

const columnComponentCodeBlock = `
<DataTable data={dataTableData} search pagination>
  <DataTable.Column id="1" name="Name" accessor="name" />
  <DataTable.Column id="2" name="Age" accessor="age" />
  <DataTable.Column
    id="3"
    name="Experience"
    accessor="experience"
    render={(row: any) =>
      row.experience > 6
        ? "Senior"
        : row.experience > 3
        ? "Intermediate"
        : "Junior"
    }
  />
</DataTable>
`;

function App() {
  const [darkMode, setDarkMode] = useState(
    document.querySelector("html")?.classList.contains("dark"),
  );

  function toggleDarkMode() {
    const html = document.querySelector("html")!;
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
  }

  function renderCodeBlock(code: string) {
    return (
      <div className="my-2">
        <CodeBlock
          text={code}
          language={"jsx"}
          showLineNumbers={true}
          theme={darkMode ? atomOneDark : atomOneLight}
        />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen dark:bg-black">
      <div className="container mx-auto mt-8 h-full">
        <div className="flex justify-between">
          <h1 className="text-5xl font-thin dark:text-white">DataTable</h1>
          <button
            className="my-2 rounded-xl border border-gray-700 px-2 dark:border-white dark:text-white"
            onClick={toggleDarkMode}
          >
            Toggle Dark Mode
          </button>
        </div>
        <div className="flex flex-col gap-8 py-8">
          <div>
            <h2 className="text-3xl font-thin dark:text-white">Simple Table</h2>
            <p className="my-2 dark:text-white">
              The Simple table takes an array of data and returns a simple table
            </p>
            {renderCodeBlock("<DataTable data={tableData} />")}
            <DataTable data={dataTableData.slice(0, 8)} />
          </div>
          <div>
            <h2 className="text-3xl font-thin dark:text-white">
              Simple Table with Search
            </h2>
            <p className="my-2 dark:text-white">
              We can add the search functionality to the simple table by adding
              the <code>search</code> prop.
            </p>
            {renderCodeBlock("<DataTable data={tableData} search />")}
            <DataTable data={dataTableData.slice(0, 8)} search />
          </div>
          <div>
            <h2 className="text-3xl font-thin dark:text-white">
              Simple Table with Search and Pagination
            </h2>
            <p className="my-2 dark:text-white">
              Similarly, we can also add the pagination functionality to the
              simple table by adding the <code>pagination</code> prop.
            </p>
            {renderCodeBlock(
              "<DataTable data={tableData} search pagination />",
            )}
            <DataTable data={dataTableData} search pagination />
          </div>
          <div>
            <h2 className="text-3xl font-thin dark:text-white">
              DataTable with Column Props
            </h2>
            <p className="my-2 dark:text-white">
              We can use the <code>columns</code> prop in the datatable to get
              more finetuned control over the rendering of the table.
            </p>
            {renderCodeBlock(columnsCodeBlock)}
            <DataTable
              data={dataTableData}
              columns={columns1}
              search
              pagination
            />
          </div>
          <div>
            <h2 className="text-3xl font-thin dark:text-white">
              DataTable with Sortable Columns
            </h2>
            <p className="my-2 dark:text-white">
              We can also add the <code>sortable</code> property to a column to
              make the column sortable
            </p>
            {renderCodeBlock(sortableColumnsCodeBlock)}
            <DataTable
              data={dataTableData}
              columns={columns2}
              search
              pagination
            />
          </div>
          <div>
            <h2 className="text-3xl font-thin dark:text-white">
              DataTable with Custom column slots
            </h2>
            <p className="my-2 dark:text-white">
              We can use the <code>render</code> prop of the columns object to
              specify custom rendering logic for a column
            </p>
            {renderCodeBlock(customSlotsCodeBlock)}
            <DataTable
              data={dataTableData}
              columns={columns3}
              search
              pagination
            />
          </div>
          <div>
            <h2 className="text-3xl font-thin dark:text-white">
              DataTable with Columns Component
            </h2>
            <p className="my-2 dark:text-white">
              We can use the Column component for a typesafe way to define
              columns
            </p>
            {renderCodeBlock(columnComponentCodeBlock)}
            <DataTable data={dataTableData} search pagination>
              <DataTable.Column id="1" name="Name" accessor="name" />
              <DataTable.Column id="2" name="Age" accessor="age" />
              <DataTable.Column
                id="3"
                name="Experience"
                accessor="experience"
                render={(row: any) =>
                  row.experience > 6
                    ? "Senior"
                    : row.experience > 3
                    ? "Intermediate"
                    : "Junior"
                }
              />
            </DataTable>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
