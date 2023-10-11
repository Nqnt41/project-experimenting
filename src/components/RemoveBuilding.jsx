// Make array of all removed names to filter data
import {useState} from "react";

function RemoveBuilding({ filteredData, selectedBuilding, dataUpdate }) {
    console.log("remove data: " + filteredData[0].id + " " + selectedBuilding)

    dataUpdate(filteredData.filter(i => i.id !== (selectedBuilding + 1)))
}

export default RemoveBuilding;
