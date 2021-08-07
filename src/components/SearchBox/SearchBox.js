import React,{useState} from 'react';
import './SearchBox.css';


const SearchBox = ({searchfield, searchChange }) => {

  return (
    <div className='searchBox'>
      {/* <p className='name-Number'>Name or Number</p> */}
      <div>
         <input
          className=""
          type='search'
          placeholder='search Pokemon'
          onChange={searchChange}
          />
          <p 
        className="searchboxsummary"
          >
          Use the Advanced Search to explore Pokemon by type, <br /> Weakness, Ability  and more!</p>
      </div>
     

      
      <div className="navInformation">
        <p>Search for a pokemon by name or using its National Pokedex number</p>
      </div>
      
    </div>
  );
}

export default SearchBox;