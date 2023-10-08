function BuildingList( {data, filter} ) {
  // TODO: Apply names filter on buildingList
  const buildingList = data
    .map(directory => {
      return (
          // TODO: Create onClick listener to capture building id being selected
          //  Got ID, what do I do with it?
          //if (directory.id.contains(filter)) {
              <tr key={directory.id} onClick={directory.id}>
                  <td> {directory.code} </td>
                  <td> {directory.name} </td>
              </tr>
          //}
      );
    });

  return <>{buildingList}</>;
}

export default BuildingList;
