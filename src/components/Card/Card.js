
import React from 'react';
import typeColors from '../../helpers/typeColors';
import CardType from '../CardType/CardType';
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <CardType pokemon={pokemon} />   
        </div>
  );
}

export default Card;




