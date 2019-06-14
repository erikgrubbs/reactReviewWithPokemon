//TODO
import React from 'react';
import PokemonListItem from './PokemonListItem.js';


const PokemonList = (props) => (
  <div id="pokemonList">
    {props.pokemon.map((poke, i) => (
      <PokemonListItem poke={poke} key={i}/>
    ))}
  </div>
);


export default PokemonList;



  // class PokemonList extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  
  //     };
  //   };
  
  //   render() {
  //     return (
  //       <div id="pokemonList">
  //         {pokemon.map((poke, i) => (
  //           <PokemonListItem poke={poke} key={i}/>
  //         ))}
  //       </div>
  //     );
  //   }
  // }