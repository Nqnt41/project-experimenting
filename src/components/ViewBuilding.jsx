import RemoveBuilding from './RemoveBuilding';

function ViewBuilding({ filteredData, selectedBuilding, dataUpdate, selectedUpdate }) {
    // Calls the RemoveBuilding function to remove the selected building when the button is pressed.
    function callRemove() {
        RemoveBuilding({ filteredData, selectedBuilding, dataUpdate, selectedUpdate })
    }

    // Default ViewBuilding output text
    if (selectedBuilding === -1) {
      return (
          <div>
              <p>
                  {' '}
                  <i>Click on a name to view more information</i>
              </p>
          </div>
      );
    }
    // ViewBuilding output text when any building is selected
    else {
        // Set currentData to the value of the data point with an id matching selectedBuilding
        const currentData = filteredData.find(filteredData => filteredData.id === selectedBuilding)
        // Allow for selections and place remove building button.
        return (
            <div>
                <p>
                    {' '}
                    <i>Click on a name to view more information {<br/>}{<br/>}</i>
                    <b>Code:</b> {currentData?.code}{<br/>}{<br/>}
                    <b>Name:</b> {currentData?.name}{<br/>}{<br/>}
                    <b>Address:</b> {currentData?.address}{<br/>}{<br/>}
                    <b>Coordinates:</b> ({currentData?.coordinates?.latitude}, {currentData?.coordinates?.longitude})
                </p>
                <button onClick={() => callRemove()}>
                    Remove Building
                </button>
            </div>
        );
    }
}

export default ViewBuilding;
