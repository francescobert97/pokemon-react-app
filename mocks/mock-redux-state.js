import { singlePokemon } from "./mock-pkmn-service";

export const mockReduxState = {
    fetch: {
      isLoading: false,
      data: {count:1,next:null,previous:null, results:[{
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
      }]},
      error: null
    },
    team: {
      team: [{...singlePokemon, uniqueId: '1'}, {...singlePokemon, uniqueId: '2', name:'test2'}, {...singlePokemon, uniqueId: '3', name:'test3' }]
    },
    box: {
      box: [{...singlePokemon, uniqueId: '4'}, {...singlePokemon, uniqueId: '5', name:'test5'}, {...singlePokemon, uniqueId: '6', name:'test6'}]
    },
    pkmnInformation: {
      pkmnInformation: {...singlePokemon, uniqueId: '12345'}
    }
};
