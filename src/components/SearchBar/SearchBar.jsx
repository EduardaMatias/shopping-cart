import React, { useState, useContext } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);

    const products = await fetchProducts(searchValue);
    setProducts(products);

    setLoading(false);

    setSearchValue('');
  };

  return (
    <form className="search_bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search_input"
        required
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {name}
      <button type="submit" className="search_button">
        <BiSearchAlt2 />
      </button>
    </form>
  );
}

export default SearchBar;
