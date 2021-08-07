import React,{ useState, useEffect } from 'react';

// import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import CardList from './components/CardList.js/CardList';
import SearchBox from "./components/SearchBox/SearchBox";
import NavBar from './components/NavBar/NavBar'


function App() {

  const [searchfield, setSearchfield] = useState('');
  const [pokemonData, setPokemonData] = useState([]);



  const onSearchChange = (event)=>  {
    setSearchfield(event.target.value)
    console.log(event.target.value)
  }


  const filterPokemons = (nameToMatch, pokemonData) => {
    return pokemonData.filter((pokemon) => {

      const regx = new RegExp(nameToMatch)

      return pokemon.name.match(regx)
      
    })
  }


  // const filterPokemons = pokemonData.filter(pokemon =>{
  //   return pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
  // })
  
  // console.log(filterPokemons)


  return (
    <div className='tc'>
      {/* <NavBar  /> */}
      <SearchBox searchChange={onSearchChange}/>
      <CardList pokemon={filterPokemons} />
      <Footer />
    </div>
  );
}

export default App;
