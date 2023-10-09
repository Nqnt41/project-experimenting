function BuildingList( { data, filterText, selectedUpdate } ) {
  // TODO: Apply names filter on buildingList
  //  BuildingList is map of all the data in the program, prints the directory map information
  //  Need to specify what ends up in directory?

  const buildingList = data.map(directory => {
      if (directory.code.toLowerCase().includes(filterText.toLowerCase()) || directory.name.toLowerCase().includes(filterText.toLowerCase()) ) {
          return (
              // TODO: Create onClick listener to capture building id being selected
              //  Got ID, what do I do with it?
              <tr key={directory.id} onClick={selectedUpdate(directory.id)}>
                  <td> {directory.code} </td>
                  <td> {directory.name} </td>
              </tr>
          );
      }
  });

  return <>{buildingList}</>;
}

export default BuildingList;
