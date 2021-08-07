import React,{ useState, useEffect } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { getAllPokemon, getPokemon} from '../../services/pokemon'
import CardInfo from '../CardInfo/CardInfo';


function CardList({pokemon}) {
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

  const filterPokemons = (nameToMatch, pokemonData) => {
    return pokemonData.filter((pokemon) => {

      const regx = new RegExp(nameToMatch)

      return pokemon.name.match(regx)
      
    })
  }

  console.log( pokemonData)

  return (
      <div>
          <div className=" next btn grow  shadow-5 ma2">
            <button onClick={prev}>Suprise Me!</button>
          <button onClick={next}>Load more pokemon!</button>
       </div>
        {
         loading ? <h1 className="tc">loading.....</h1> :(
        
           <div className="grid-container">
             {pokemonData.map((pokemon, i) => {
               return <Card key={i} pokemon={pokemon}  />
             })}
           </div>
         )
        }
         <div className=" next btn grow  shadow-5 ma2">
         <button onClick={next}>Load more pokemon!</button>
       </div>


       {
         loading ? <h1 className="tc">loading.....</h1> :(
        
           <div className="grid-container ">
             {pokemonData.map((pokemon, i) => {
               return <CardInfo key={i} pokemon={pokemon}  />
             })}
           </div>
         )
        }


      </div>
  )
}
export default CardList;