import { useEffect, useRef } from "react";

function Search({ filterText, filterUpdate }) {
  // Get input using useRef()
  const input = useRef(null);

  // Allow filter to function without needing to be clicked on.
  useEffect(() => {
      input.current.focus();
  }, []);

  // Function to have function be filtered in the App.jsx file.
  function handleChange() {
      filterUpdate(input.current.value)
  }

  // Create filter bubble
  return (
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