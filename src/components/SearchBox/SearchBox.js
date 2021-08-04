import React,{useState} from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange }) => {

  return (
    <div className='searchBox'>
      <input
        className=""
        type='search'
        placeholder='search Pokemon'
        onChange={searchChange}
      />
      <div className='inInfo '><p className='underline'>Search for a pokemon by name or using its National pokemon number.</p></div>
    </div>
  );
}

export default SearchBox;