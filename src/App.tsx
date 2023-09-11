import DataTable from "./Datatable";
import "./index.css";

const dataTableData = [
  { name: "John Doe", age: 30, occupation: "Software Engineer" },
  { name: "Jane Doe", age: 28, occupation: "Data Scientist" },
  { name: "Bob Smith", age: 35, occupation: "Product Manager" },
];

function App() {
  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-5xl font-thin">DataTable</h1>

      <DataTable data={dataTableData} />
    </main>
  );
}

export default App;
