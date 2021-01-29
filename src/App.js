import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <div className="table-container">
        <FilteringTable />
      </div>
    </div>
  );
}

export default App;
