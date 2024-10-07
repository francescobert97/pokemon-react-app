import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Home from "./Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import fetchReducer from "../../redux/reducers/fetchReducer/fetchReducer";
import { mockReduxState } from "../../../mocks/mock-redux-state";
const store = createStore(fetchReducer, mockReduxState);

jest.mock('../../components/iconboxmenu/IconBoxMenu.js', () => () => <div>Mocked Child</div>); // Mock del componente
beforeEach(() => {

      localStorage.setItem('persist:root', JSON.stringify({
      fetch: JSON.stringify(mockReduxState.fetch)
    }));
  });

describe('home', () =>{
    it('should render the section correctly', () => {
        render(
        <Provider store={store}>
            <Home />
        </Provider>)
    })
})