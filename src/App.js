import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <div className="table-container">
        <RowSelection />
      </div>
    </div>
  );
}

export default App;
