import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import "./Header.css";




function Header({pokemon}) {
    return (
        <div className="header">
            <div>
                <SearchBox />
                <p>Use the Advanced Search to explore Pokemon by type, Weakness, Ability and more!</p>
            </div>
            
            <div className="headerSummary">
                <p> Search for a pkemon by name or using its National Pokemon number.</p>
            </div>

        </div>
    )
}


export default Header;