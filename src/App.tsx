import DataTable from "./Datatable";
import "./index.css";

const dataTableData = [
  { name: "John Doe", age: 30, occupation: "Software Engineer" },
  { name: "Jane Doe", age: 28, occupation: "Data Scientist" },
  { name: "Bob Smith", age: 35, occupation: "Product Manager" },
  { name: "Alice Johnson", age: 32, occupation: "UX Designer" },
  { name: "Charlie Brown", age: 29, occupation: "Web Developer" },
  { name: "David Williams", age: 40, occupation: "System Analyst" },
  { name: "Eva Green", age: 34, occupation: "Database Administrator" },
  { name: "Frank Miller", age: 36, occupation: "Network Engineer" },
  { name: "Grace Hopper", age: 42, occupation: "Software Architect" },
  { name: "Helen Parker", age: 38, occupation: "IT Manager" },
  { name: "Ivan Petrov", age: 33, occupation: "Security Specialist" },
  { name: "Jackie Chan", age: 37, occupation: "Mobile Developer" },
  { name: "Kevin Hart", age: 39, occupation: "Data Analyst" },
  { name: "Liam Neeson", age: 41, occupation: "Business Analyst" },
  { name: "Mia Wallace", age: 35, occupation: "Quality Assurance" },
  { name: "Nina Simone", age: 43, occupation: "Product Owner" },
  { name: "Oscar Wilde", age: 44, occupation: "Scrum Master" },
  { name: "Paul McCartney", age: 45, occupation: "DevOps Engineer" },
  { name: "Quincy Jones", age: 46, occupation: "Technical Writer" },
  { name: "Rihanna Fenty", age: 47, occupation: "SEO Specialist" },
  { name: "Steve Jobs", age: 48, occupation: "Entrepreneur" },
  { name: "Tina Turner", age: 49, occupation: "Project Manager" },
  { name: "Uma Thurman", age: 50, occupation: "Software Tester" },
  { name: "Vin Diesel", age: 51, occupation: "System Administrator" },
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
