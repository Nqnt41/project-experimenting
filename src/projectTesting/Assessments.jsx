function PrintMiddleEntries( { filteredData } ) {
    const sampleList = ["Assessment 1", "Assessment 2", "Assessment 3"]; // Can replace with database
    return ( // Replace this stuff with a structure for assessment listings and it should work.
        <div>
            {sampleList.map(sampleList => (
                <div className="testingProjectMid projectText">
                    <p2 className="alignLeft">{sampleList}</p2>
                    <button onClick={() => handleAdd()} className="alignRight">
                        Live X to Y
                    </button>
                    <button onClick={() => handleAdd()} className="alignRight">
                        Grade
                    </button>
                    <button onClick={() => handleAdd()} className="alignRight">
                        Assign to Classroom
                    </button>
                </div>
            ))}
        </div>
    );
}

function Assessments( { filteredData, numTestEntries } ) {
    return (
        <div className="projectText">
            <p1 className="testingProjectTop bold">
                Assessments:
            </p1>
            <PrintMiddleEntries
                filteredData={filteredData}
            />
            <div className="projectText">
                <button onClick={() => handleAdd()} className="alignRight button2">
                    Create New<br></br>Assignment
                </button>
            </div>
        </div>
    );
}

// ViewBuilding output text when any building is selected
/*

<p1 className="testingProjectBot">
                Last in list of assessments
            </p1>

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
}*/

export default Assessments;