import React,{ useState, useEffect } from 'react';
import Header from './components/Layout/Heater';
import { getAllPokemon, getPokemon} from './services/pokemon';
import Card from './components/Card';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNexUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';


  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
     
      setNexUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, [])

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData)
  };

  console.log(pokemonData)
  return (
    <div>
      {
         loading ? <h1>loading.....</h1> :(
           <>
           <div>
             {pokemonData.map((pokemon, i) => {
               return <Card key={i} pokemon={pokemon} />
             })}
           </div>
           </>
         )
      }
    </div>
  );
}

export default App;