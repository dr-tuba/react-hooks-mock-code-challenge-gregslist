import React from "react";

function Search({ inputText, setInputText, handleSortClick }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search free stuff"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      <button type='button' onClick={handleSortClick}>Sort by Location</button>
    </>
    
  );
}

export default Search;
