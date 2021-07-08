import React from "react";
import Search from "./Search";

function Header({ inputText, setInputText, handleSortClick, handleChange, handleSubmit, formData }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        inputText={inputText}
        setInputText={setInputText}
        handleSortClick={handleSortClick}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </header>
  );
}

export default Header;
