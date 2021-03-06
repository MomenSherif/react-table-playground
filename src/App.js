import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';
import ColumnOrder from './components/ColumnOrder';
import ColumnHiding from './components/ColumnHiding';
import StickyTable from './components/StickyTable';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <div className="table-container">
        <StickyTable />
      </div>
    </div>
  );
}

export default App;
