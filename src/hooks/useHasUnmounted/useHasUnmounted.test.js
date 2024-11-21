import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, screen } from "@testing-library/react";
import React from "react";
import fetchReducer from "../../redux/reducers/fetchReducer/fetchReducer";
import { mockReduxState } from "../../../mocks/mock-redux-state";

const store = createStore(fetchReducer, mockReduxState);

beforeEach(() => {

      localStorage.setItem('persist:root', JSON.stringify({
      fetch: JSON.stringify(mockReduxState.fetch)
    }));
  });

describe('useHasUnmounted', () =>{
    it('should render correctly', () => {
        render(
        <Provider store={store}>
            
        </Provider>)
    })
})