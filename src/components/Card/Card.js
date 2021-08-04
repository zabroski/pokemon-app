
import React from 'react';
import typeColors from '../../helpers/typeColors';
import CardType from '../CardType/CardType';
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>

            <div className="tc">
                {`#00${pokemon.id}`} 
            </div>

            <div className="Card__name">
                <p>{pokemon.name}</p>
            </div>
            <CardType pokemon={pokemon} />   
        </div>
  );
}

export default Card;



