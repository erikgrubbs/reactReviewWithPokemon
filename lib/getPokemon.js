import axios from 'axios';



const getPokemon = (query, callback) => {
  //TODO
 axios.get("https://pokeapi.co/api/v2/pokemon/" + query) 
   .then((data) => {
     callback(data);
   })
   .catch((error) => {
     alert(query + ' is not a pokemon name!');
   });
}

export default getPokemon;