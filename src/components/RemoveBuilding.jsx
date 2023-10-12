// Short function to filter list so it doesn't contain the removed building. Also resets selectedBuilding since old building gone.
function RemoveBuilding({ filteredData, selectedBuilding, dataUpdate, selectedUpdate }) {
    dataUpdate(filteredData.filter(i => i.id !== (selectedBuilding))) // Since find makes view dependent on id, doesnt work anymore
    selectedUpdate(-1)
}

export default RemoveBuilding;
