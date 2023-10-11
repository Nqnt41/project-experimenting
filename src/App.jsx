import {useState} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

function App({ data }) {
  // TODO: Update the following two variables to use the useState() hook
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(-1);
  const [filteredData, setFilteredData] = useState(data);

  // Set the state of the filter text to the value being passed in
  function filterUpdate(value) {
    setFilterText(value)
  }

  // Set the state of the selected building to the id being passed in
  function selectedUpdate(id) {
    setSelectedBuilding(id - 1)
    console.log("App function id: " + (id - 1))
  }

  // TODO: Placeholder below
  function dataUpdate(changeData) {
    console.log("sizes: " + filteredData.size + " " + changeData.size)
    setFilteredData(changeData)
  }

  return (
    <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>
      {/* TODO: Edit Search component to include necessary props */}
      <Search
        filterText={filterText} filterUpdate={filterUpdate}
      />
      <main>
        <div className="row">
          <div className="column1">
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <td>
                    <b>Code Building</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Edit BuildingList component to include necessary props */}
                <BuildingList
                  filteredData={filteredData} filterText={filterText} selectedUpdate={selectedUpdate}
                />
              </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
            <ViewBuilding
              filteredData={filteredData} selectedBuilding={selectedBuilding} dataUpdate={dataUpdate}
            />
          </div>
          <div className="column2">
            <AddBuilding
              filteredData={filteredData} dataUpdate={dataUpdate}
            />
          </div>
        </div>
        <Credit />
      </main>
    </div>
  );
}

export default App;
