function BuildingList( { filteredData, filterText, selectedUpdate } ) {
  // TODO: Apply names filter on buildingList
  //  BuildingList is map of all the data in the program, prints the directory map information
  //  Need to specify what ends up in directory?
  function handleChange(id) {
      selectedUpdate(id)
  }

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
