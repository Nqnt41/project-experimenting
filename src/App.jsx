import {useState} from 'react';
/*import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';*/
import Assessments from './projectTesting/Assessments';

function App({ data }) {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="bg">
      <div className="row">
        <h1>Assignment Page</h1>
      </div>
      <main>
        <Assessments
            filteredData={filteredData} numTestEntries={1}
        />
      </main>
    </div>
  );
}

export default App;

/*
      <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>
      <Search
        filterText={filterText} filterUpdate={filterUpdate}
      />
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
                <BuildingList
                  filteredData={filteredData} filterText={filterText} selectedUpdate={selectedUpdate}
                />
              </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
            <ViewBuilding
              filteredData={filteredData} selectedBuilding={selectedBuilding} dataUpdate={dataUpdate} selectedUpdate={selectedUpdate}
            />
          </div>
          <div className="column2">
            <AddBuilding
              filteredData={filteredData} dataUpdate={dataUpdate}
            />
          </div>
        </div>
        <Credit />
 */
