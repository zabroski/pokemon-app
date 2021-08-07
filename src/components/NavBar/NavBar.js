import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './NavBar.css';

function NavBar({onSearchChange}) {
    return (
  
    <div className="navbar">
    <div>
        <SearchBox   searchChange={onSearchChange}/>
        <p className="searchboxsummary">Use the Advanced Search to explore Pokemon by type, <br /> Weakness, Ability and more!</p>
    </div>

</div>
    
    )
}

export default NavBar;