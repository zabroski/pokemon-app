import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import "./Header.css";




class Header extends Component {

   constructor() {
       super();
       this.state = {
           searchfield: '',
       }
   }


 onSearchChange(e) {
        console.log(e.target.value)
    }

    render() {
        return(
            <div className="header">
            <div>
                <SearchBox setSearchfield={this.onSearchChange} />
                <p>Use the Advanced Search to explore Pokemon by type, Weakness, Ability and more!</p>
            </div>
            
            <div className="headerSummary">
                <p> Search for a pkemon by name or using its National Pokemon number.</p>
            </div>

        </div>
        )
    }

}


export default Header;