import { useRef } from "react";

function AddBuilding({ filteredData, dataUpdate }) {
    // Function to update all data at the end of the function
    function handleChange(newData) {
        dataUpdate([...filteredData, newData]);
    }

    // Creates new data point containing information gathered below. Also checks that code and name included first.
    function handleAdd() {
        if (input1.current.value !== "" && input2.current.value !== "") {
            const newData = {
                id: filteredData.length + 1, //+1?
                code: input1.current.value,
                name: input2.current.value,
                address: input3.current.value,
                coordinates: {
                    latitude: input4.current.value,
                    longitude: input5.current.value
                }
            }
            // Call handleChange to allow insertion of new data
            handleChange(newData)
        }
    }

    // The five inputs used to track the code, name, address, and coordinates
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);

    return (
        <div>
            <p>
                {' '}
                <i>Enter information to add:{<br/>}{<br/>}</i>
                <b>Code (Required):{<br/>}</b>
            </p>
            <form>
                <input
                    type="text2"
                    placeholder="Code"
                    ref={input1}
                />
            </form>
            <p><b>Name (Required):{<br/>}</b></p>
            <form>
                <input
                    type="text2"
                    placeholder="Name"
                    ref={input2}
                />
            </form>
            <p><b>Address:{<br/>}</b></p>
            <form>
                <input
                    type="text2"
                    placeholder="Address"
                    ref={input3}
                />
            </form>
            <p><b>Latitude:{<br/>}</b></p>
            <form>
                <input
                    type="text2"
                    placeholder="Latitude"
                    ref={input4}
                />
            </form>
            <p><b>Longitude:{<br/>}</b></p>
            <form>
                <input
                    type="text2"
                    placeholder="Longitude"
                    ref={input5}
                />
            </form>
            <button onClick={() => handleAdd()}>
                Add Building
            </button>
        </div>
    );
}

export default AddBuilding;
