import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import './SearchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search_bar">
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search_input"
        required
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue}
      <button type="submit" className="search_button">
        <BiSearchAlt2 />
      </button>
    </form>
  );
}

export default SearchBar;
