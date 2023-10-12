function BuildingList( { filteredData, filterText, selectedUpdate } ) {
  // Function to update the id for selectedBuilding variable
  function handleChange(id) {
      selectedUpdate(id)
  }

  // Build search bar and its key features
  const buildingList = filteredData.map(directory => {
      if (directory.code.toLowerCase().includes(filterText.toLowerCase()) || directory.name.toLowerCase().includes(filterText.toLowerCase()) ) {
          return (
              <tr key={directory.id} onClick={() => handleChange(directory.id)}>
                  <td> {directory.code} </td>
                  <td> {directory.name} </td>
              </tr>
          );
      }
  });

  return <>{buildingList}</>;
}

export default BuildingList;
