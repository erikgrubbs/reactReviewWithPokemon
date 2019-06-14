//TODO
import React from 'react';

var PokemonListItem = ({poke}) => (
  <div className="pokemonItem">
    <div>Name: {poke.name}</div>
    <div>Id: {poke.id}</div>
    <img src={poke.sprites.front_default} alt="pokemon image"/> 
  </div>
);


export default PokemonListItem;