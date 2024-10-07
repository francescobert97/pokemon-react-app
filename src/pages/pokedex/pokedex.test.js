import React from 'react';
import { render } from '@testing-library/react';
import Pokedex from './pokedex';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import fetchReducer from '../../redux/reducers/fetchReducer/fetchReducer';
import { mockReduxState } from '../../../mocks/mock-redux-state';
import rootReducer from '../../redux/reducers/reducers';
import { MemoryRouter } from 'react-router-dom';

const store = createStore(rootReducer, mockReduxState); // Crea lo store con il tuo rootReducer


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
});