import { useEffect, useRef } from "react";

function Search({ filterText, filterUpdate }) {

  // TODO: Update the input variable to use the useRef() hook
  //  Uses it, now what?
  const input = useRef(null);

  useEffect(() => {
      input.current.focus();
  }, []);

  function handleChange() {
    // TODO: Update the value of the filter with the input from the textbox
      filterUpdate(input.current.value)
    // Hint: You will need to use the "current" property of the input variable
  }

  return (
    // TODO: Add a ref attribute to the input tag
    // TODO: Add an onChange attribute to the input tag
    // <pre>State value: {filterText}</pre>
    <form>
      <input 
        type="text"
        placeholder="Type to Filter"
        value={filterText}
        onChange={handleChange}
        ref={input}
      />
    </form>
  );
}
export default Search;
