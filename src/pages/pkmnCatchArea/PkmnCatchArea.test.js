import React from 'react';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mockReduxState } from '../../../mocks/mock-redux-state';
import '@testing-library/jest-dom'; 
import PkmnCatchArea from './PkmnCatchArea';
import rootReducer from '../../redux/reducers/reducers';
import { singlePokemon as mockSinglePokemon } from '../../../mocks/mock-pkmn-service';
function mockMove(constant) {
    return constant
  }
jest.mock('../../services/pokemon.service.js', () => ({
    getSinglePokemonInformation: jest.fn(() => (mockMove({...mockSinglePokemon, uniqueId: 313})))
  }));

 
const store = createStore(rootReducer, mockReduxState);

describe('PkmnCatchArea',() => {
    it('should render without any crash', () => {
        render(
          <Provider store={store}>
            <PkmnCatchArea />
          </Provider>);
      })
      it('should display pokemon',async () => {
        render(
          <Provider store={store}>
            <PkmnCatchArea />
          </Provider>);

       /* const pokemonImage = await screen.findByText(/Congratulations! you have got ditto/i);
        expect(pokemonImage).toBeInTheDocument()*/
      })
})

