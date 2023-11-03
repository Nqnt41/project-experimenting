function PrintMiddleEntries( { filteredData } ) {
    const sampleList = ["alligator", "snake", "lizard"]; // Can replace with database
    return ( // Replace this stuff with a structure for assessment listings and it should work.
        <div>
            {sampleList.map(sampleList => (
                <div className="testingProjectMid">
                    <p1 className="testingProjectText">{sampleList}</p1>
                </div>
            ))}
        </div>
    );
}

function Assessments( { filteredData, numTestEntries } ) {
    // We dont have to use this or make the edges rounded or anything, I mainly
    if (filteredData.size == 0 || numTestEntries == 0) {
        return
    }
    else if (filteredData.size == 1 || numTestEntries == 1) {
        return (
            <div className="testingProjectSolo">
                <p1 className="testingProjectText">
                    If only one Assessment
                </p1>
            </div>
        );
    }
    else if (filteredData.size == 2 || numTestEntries == 2) {
        return (
            <div className="testingProjectText">
                <p1 className="testingProjectTop">
                    First in list of assessments, if we do rounded borders
                </p1>
                <p1 className="testingProjectBot noTopBorder">
                    Last in list of assessments
                </p1>
            </div>
        );
    }
    else {
        return (
            <div className="testingProjectText">
                <p1 className="testingProjectTop noBottomBorder">
                    First in list of assessments, if we do rounded borders
                </p1>
                <PrintMiddleEntries
                  filteredData={filteredData}
                />
                <p1 className="testingProjectBot">
                    Last in list of assessments
                </p1>
            </div>
        );
    }
    // ViewBuilding output text when any building is selected
    /*else {
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
    }*/
}

export default Assessments;