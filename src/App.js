import React,{ useState, useEffect } from 'react';
import { getAllPokemon, getPokemon} from './services/pokemon';
import Card from './components/Card';
import './App.css';
// import CardInfo from './components/CardInfo/CardInfo';
import Fouter from './components/Footer/Fouter';
import SearchBox from './components/SearchBox/SearchBox';
// import CardList from './components/CardList/CardList';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNexUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchfield, setSearchfield] = useState('');
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';


  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNexUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      // console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async() => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNexUrl(data.next);
    setPrevUrl(data.previous)
    setLoading(false);

  }


  const prev = async() => {
    if(!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNexUrl(data.next);
    setPrevUrl(data.previous)
    setLoading(false);

  }


  const onSearchChange = (event)=>  {
    setSearchfield(event.target.value)
    console.log(event.target.value)
  }



  const filterPokemons = pokemonData.filter(pokemon =>{
    return pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  console.log(filterPokemons)



  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData)
  };

  
  console.log( pokemonData)
  return (

    <div className=''>
       <SearchBox searchChange={onSearchChange} />
       {/* <CardList /> */}
       {/* <Header /> */}
       <div className="btn grow  shadow-5 ma2">
         <button onClick={prev}>Suprise Me!</button>
         <button onClick={next}>Load more pokemon!</button>
       </div>
      {
         loading ? <h1>loading.....</h1> :(
        
           <div className="grid-container">
             {pokemonData.map((pokemon, i) => {
               return <Card key={i} pokemon={pokemon}  />
             })}
           </div>
         )
      }
      <div className="btn grow  shadow-5 ma2">
         <button onClick={next}>Load more pokemon!</button>
       </div>
      <Fouter />
    </div>
  );
}

export default App;