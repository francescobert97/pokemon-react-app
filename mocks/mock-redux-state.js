import { singlePokemon } from "./mock-pkmn-service";

export const mockReduxState = {
    fetch: {
      isLoading: false,
      data: [singlePokemon],
      error: null
    },
    team: {
      team: []
    },
    box: {
      box:[]
    },
    pkmnInformation: {
      pkmnInformation: {...singlePokemon, uniqueId: '12345'}
    }
};
