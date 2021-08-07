import React from 'react';
import typeColors from '../../helpers/typeColors';
import './CardInfo.css'


function CardInfo({ pokemon }) {

    return (
        <div className=" bigcardinfo tc bg-light-green  dib br3 ma2 grow bw2 shadow-5 Card">
            <div className="Card__info">
                <div className="Card__name">
                    {pokemon.name}
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>

         
    );
}

export default CardInfo;
