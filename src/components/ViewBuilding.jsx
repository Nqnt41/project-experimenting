import RemoveBuilding from './RemoveBuilding';

function ViewBuilding({ filteredData, selectedBuilding, dataUpdate }) {
  // TODO: Find the corresponding data based off the selected building's id and display its data
  //  Call search, output resulting data across multiple lines.
    console.log("ViewBuilding: " + selectedBuilding)
    function callRemove() {
        RemoveBuilding({ filteredData, selectedBuilding, dataUpdate })
        console.log("hi")
    }

    if (selectedBuilding == -1) {
      return (
          <div>
              <p>
                  {' '}
                  <i>Click on a name to view more information</i>
              </p>
          </div>
      );
    }
    else {
      try {
          return (
              <div>
                  <p>
                      {' '}
                      <i>
                      Click on a name to view more information {<br/>}
                      Code: {filteredData.at(selectedBuilding).code}{<br/>}
                      Name: {filteredData.at(selectedBuilding).name}{<br/>}
                      Address: {filteredData.at(selectedBuilding).address}{<br/>}
                      Coordinates: {filteredData.at(selectedBuilding).coordinates.latitude}, {filteredData.at(selectedBuilding).coordinates.longitude}
                      </i>
                  </p>
                  <button onClick={() => callRemove()}>
                      Remove Building
                  </button>
              </div>
          );
      }
      catch (error) {
          return (
              <div>
                  <p>
                      {' '}
                      <i>Click on a name to view more information{<br/>}
                      Code: {filteredData.at(selectedBuilding).code}{<br/>}
                      Name: {filteredData.at(selectedBuilding).name}
                      </i>
                  </p>
                  <button onClick={() => callRemove()}>
                      Remove Building
                  </button>
              </div>
          );
      }
  }
}

export default ViewBuilding;
