// Include new building in map array?

import {useRef, useState} from "react";

/*function callAdd( {input1, input2, input3, input4, input5} ) {
    try {
        console.log(input1.current.value + " " + input2.current.value + " " + input3.current.value + " " + input4.current.value + " " + input5.current.value)
    }
    catch (error) {
        console.log("oops")
    }
    // TODO: dataUpdate([...filteredData, newData]);
}*/

// TODO: Try and catch to allow for variations to be made without errors - with coords, w/o, addresses, etc.

// TODO: Got stuff to do, save last issues for office hours:
//  Make datapoint that doesnt have key conflict? Using filteredData[0] to get a singular point I can edit, but it has a set key.
//  Also, in ViewBuilding using try and catch to check if values are undefined, has to be a better way. Need to be able to print out like coords w/o address.
//  Could probably do it with trys and catches, but worth asking if theres an easier method.
//  Oh also maybe try to commit and push to main branch if theres time. Had issues in past.


function AddBuilding({ filteredData, dataUpdate }) {
    const [newData, setNewData] = useState(filteredData[0]);
    console.log("hi")

    function handleChange(newData) {
        dataUpdate([...filteredData, newData]);
    }

    function handleAdd() {
        console.log(input1.current.value + " " + input2.current.value + " " + input3.current.value + " " + input4.current.value + " " + input5.current.value)
        setNewData({
            code: input1.current.value,
            name: input2.current.value,
            address: input3.current.value,
            latitude: input4.current.value,
            longitude: input5.current.value
        })
        handleChange(newData)
    }

    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);

    return (
        <div>
            <p>
                {' '}
                Enter information to add:{<br/>}
                Code (Required):{<br/>}
            </p>
            <form>
                <input
                    type="text2"
                    placeholder="Code"
                    ref={input1}
                />
            </form>
            <p>Name (Required):{<br/>}</p>
            <form>
                <input
                    type="text2"
                    placeholder="Name"
                    ref={input2}
                />
            </form>
            <p>Address:{<br/>}</p>
            <form>
                <input
                    type="text2"
                    placeholder="Address"
                    ref={input3}
                />
            </form>
            <p>Latitude:{<br/>}</p>
            <form>
                <input
                    type="text2"
                    placeholder="Type to Filter"
                    ref={input4}
                />
            </form>
            <p>Longitude:{<br/>}</p>
            <form>
                <input
                    type="text2"
                    placeholder="Type to Filter"
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
