import React from 'react';


function Card ({ pokemon}) {
    return (
        <div className='card'>
            <div className='card_img'>
                <img src={pokemon.sprites.front_default} alt=""/>
            </div>

            <div className='card_name'>
                {pokemon.name}
            </div>

            <div className='card_types'>
                {pokemon.types.map(type => {
                    return (
                        <div className='cart_type'>
                            {type.type.name}
                        </div>
                    )
                })}

            </div>

            <div className='card_info'>
                <div className='card_data card_data--weight'>
                    <p className='title'>weight</p>
                    <p>{pokemon.weight}</p>
                </div>

                <div className='card_data card_data--height'>
                    <p className='title'>height</p>
                    <p>{pokemon.height}</p>
                </div>

                <div className='card_data card_data--ability'>
                    <p className='title'>ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>

            </div>
        </div>
    )
}
export default Card;