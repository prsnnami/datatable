import DataTable from "./Datatable";
import "./index.css";

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

const columns = [
  {
    id: 1,
    name: "Name",
    sortable: true,
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
  {
    id: 4,
    name: "Experience",
    accessor: "experience",
    render: (x: any) =>
      x.experience > 6
        ? "Senior"
        : x.experience > 3
        ? "Intermediate"
        : "Junior",
  },
  {
    id: 5,
    name: "Occupation",
    accessor: "occupation",
    render: (x: any) => x.occupation,
  },
];

function App() {
  function toggleDarkMode() {
    const html = document.querySelector("html")!;
    html.classList.toggle("dark");
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
        <DataTable data={dataTableData} columns={columns} pagination={true} />
      </div>
    </main>
  );
}

export default App;
