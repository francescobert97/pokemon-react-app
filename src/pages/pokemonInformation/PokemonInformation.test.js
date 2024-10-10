import { render } from "@testing-library/react";
import React from "react";
import PokemonInformation from "./PokemonInformation";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers/reducers";
import { mockReduxState } from "../../../mocks/mock-redux-state";
import { singlePokemon } from "../../../mocks/mock-pkmn-service";
const store = createStore(rootReducer, mockReduxState);

function mockMove() {
    return singlePokemon
  }

jest.mock('../../services/pokemon.service.js', () => ({
    __esModule: true,
    default: jest.fn(() => (mockMove()))
  }));
beforeAll(() => {
  global.fetch = jest.fn(() => Promise.resolve());
});
describe('PokemonInformation', () => {
    it('should render without any problem',() => {
        render(
            
            <MemoryRouter>    
                 <Provider store={store}> 
                <PokemonInformation />
                </Provider> 
            </MemoryRouter>
    )
    })
})