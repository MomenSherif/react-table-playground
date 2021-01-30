import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <div className="table-container">
        <PaginationTable />
      </div>
    </div>
  );
}

export default App;
