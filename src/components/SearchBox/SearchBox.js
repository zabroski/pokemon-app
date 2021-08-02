import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='searchBox'>
      <input
        className=""
        type='search'
        placeholder='search Pokemon'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;