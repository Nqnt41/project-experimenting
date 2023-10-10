function ViewBuilding( data, selectedBuilding ) {
  // TODO: Find the corresponding data based off the selected building's id and display its data
  //  Call search, output resulting data across multiple lines.
    console.log("hi " + selectedBuilding)
  if (selectedBuilding != 0) {
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
      return (
          <div>
              <p>
                  {' '}
                  <i>Click on a name to view more information</i>
                  <i>Code: {data.at(selectedBuilding).code}</i>
                  <i>Name: {data.at(selectedBuilding).name}</i>
                  <i>Address: {data.at(selectedBuilding).address}</i>
                  <i>Coordinates: {data.at(selectedBuilding).coordinates.latitude}, {data.at(selectedBuilding).coordinates.longitude}</i>
              </p>
          </div>
      );
  }
}

export default ViewBuilding;
