import React, {useState} from 'react';
import SearchBox from '../SearchBox/SearchBox';
import "./Header.css";




const Header = ({pokemon}) => {

    const [searchfield, setSearchfield] = useState('');

    // const onSearchChange = (event) => {
    //     setSearchfield(event.target.value)
    //     console.log(event.target.value)
    // }

    return (
        <div className="header">
            <div>
                <SearchBox searchChange={this.onSearchChange} />
                <p>Use the Advanced Search to explore Pokemon by type, Weakness, Ability and more!</p>
            </div>
            
            <div className="headerSummary">
                <p> Search for a pkemon by name or using its National Pokemon number.</p>
            </div>

        </div>
    )
}


export default Header;