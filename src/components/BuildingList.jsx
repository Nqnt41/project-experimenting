function BuildingList( {data, filter} ) {
  // TODO: Apply names filter on buildingList
  //  BuildingList is map of all the data in the program, prints the directory map information
  //  Need to specify what ends up in directory?
  const buildingList = data.map(directory => {
      return (
          // TODO: Create onClick listener to capture building id being selected
          //  Got ID, what do I do with it?
          <tr key={directory.id}>
              <td onClick={console.log("code")}> {directory.code} </td>
              <td onClick={console.log("name")}> {directory.name} </td>
          </tr>
      );
  });

  return <>{buildingList}</>;
}

export default BuildingList;
