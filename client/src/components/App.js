import React from 'react';
import Search from './Search.js';
import PokemonList from './PokemonList.js';
import { stat } from 'fs';
//TODO

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
    this.pokeSearch = this.pokeSearch.bind(this);
  }

  pokeSearch(query) {
     this.props.getPokemon(query, ({data}) => {
       this.setState({
         pokemon: [data, ...this.state.pokemon]
       });
     });
  }

  componentDidMount() {
    this.pokeSearch('bulbasaur');
  }

  render() {
    return (
    <div>
      <Search pokeSearch={this.pokeSearch}/>
      <PokemonList pokemon={this.state.pokemon}/>
    </div>
  );
};

}
export default App;