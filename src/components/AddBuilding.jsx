// Include new building in map array?

function AddBuilding({ filteredData, newData, dataUpdate }) {
    //dataUpdate([...filteredData, newData]);
    console.log("hi")
    return (
        <div>
            <p>
                {' '}
                <i>Enter information to add:{<br/>}
                    Code (Required):{<br/>}
                    Name (Required):{<br/>}
                    Address:{<br/>}
                    Latitude:{<br/>}
                    Longitude:{<br/>}
                </i>
            </p>
            <button onClick={() => callRemove()}>
                Remove Building
            </button>
        </div>
    );
}

export default AddBuilding;
