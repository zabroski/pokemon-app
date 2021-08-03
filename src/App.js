import React,{ useState, useEffect } from 'react';
import { getAllPokemon, getPokemon} from './services/pokemon';
import Card from './components/Card';
import './App.css';
// import CardInfo from './components/CardInfo/CardInfo';
import Fouter from './components/Footer/Fouter';
import Header from './components/Header/Header';

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
    <div>
       <Header />
       <div className="btn">
         <button onClick={prev}>Suprise Me!</button>
         <button onClick={next}>Loade more!</button>
       </div>
      {
         loading ? <h1>loading.....</h1> :(
        
           <div className="grid-container">
             {pokemonData.map((pokemon, i) => {
               return <Card key={i} pokemon={pokemon} />
             })}
           </div>
         )
      }

      <div className="btn">
         <button onClick={next}>Loade more!</button>
       </div>
      <Fouter />
      {/* <Header /> */}
    </div>
  );
}

export default App;
