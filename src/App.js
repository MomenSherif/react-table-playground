import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';
import ColumnOrder from './components/ColumnOrder';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <div className="table-container">
        <ColumnOrder />
      </div>
    </div>
  );
}

export default App;
