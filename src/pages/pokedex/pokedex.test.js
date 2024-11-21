import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Pokedex from './pokedex';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mockReduxState } from '../../../mocks/mock-redux-state';
import rootReducer from '../../redux/reducers/reducers';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { getSinglePokemonInformation } from '../../services/pokemon.service';
import { singlePokemon as mockSinglePokemon } from '../../../mocks/mock-pkmn-service';

const store = createStore(rootReducer, mockReduxState); // Crea lo store con il tuo rootReducer

function mockMove(constant) {
  return constant
}
/*jest.mock('../../../../utils/downloadData/downloadData.js', () => ({
  downloadData2: jest.fn(() => (mockMove(mockMvs)))
}))*/
jest.mock('../../services/pokemon.service.js', () => ({
  getSinglePokemonInformation: jest.fn(() => (mockMove({...mockSinglePokemon, name: 'groudon'})))
}));

describe('pokedex component', () => {
  it('should render the section correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Pokedex />
        </Provider>
     </MemoryRouter>
    )
  });
  it('should display pokemon informations', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Pokedex />
        </Provider>
     </MemoryRouter>
    )

    const pkmnStored = screen.getByText(/ditto/i);
    const pkmnSprite = screen.getByAltText(/pokemon sprite/i)
    const pkmnAttribute = screen.getByAltText(/type pkmn/i)
    expect(pkmnStored).toBeInTheDocument();
    expect(pkmnAttribute).toBeInTheDocument();
    expect(pkmnSprite).toBeInTheDocument();
  });

  it('should change pokemon displayed informations', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Pokedex />
        </Provider>
     </MemoryRouter>
    )


    const pokemonInTheList = screen.getByText(/bulbasaur/i)
    fireEvent.click(pokemonInTheList)
    expect(screen.getByText(/groudon/i)).toBeInTheDocument()
    expect(screen.queryByText(/ditto/i)).not.toBeInTheDocument()

    //per farlo funzionare bisogna mockare anche aggiornamento allo store redux
  });
});