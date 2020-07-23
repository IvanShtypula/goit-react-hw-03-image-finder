import React, {useState} from "react";
import "./Searchbar.css";


const Searchbar = ({updateSearch, updateImages}) => {

  const [search, setSearch] = useState("");

  const inputHandler = ({target}) => {    
    const {value} = target;
    setSearch(value); 
    updateSearch(value);    
  }; 

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={updateImages}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputHandler}
          name="search"
          value={search}
        />
      </form>
    </header>
  );
};

export default Searchbar;
