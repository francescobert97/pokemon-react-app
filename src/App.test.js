import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import rootReducer from './redux/reducers/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mockReduxState } from '../mocks/mock-redux-state';
import '@testing-library/jest-dom'; 




jest.mock('./pages/home/Home.js', () => () => <div>Mocked Child</div>); // Mock del componente

const store = createStore(rootReducer, mockReduxState);
test('should render without any crash', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);

});


/*beforeAll(() => {
  global.fetch = jest.fn(() => Promise.resolve());
});*/
