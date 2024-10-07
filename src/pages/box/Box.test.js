import { render } from "@testing-library/react";
import React from "react";
import rootReducer from "../../redux/reducers/reducers";
import { mockReduxState } from "../../../mocks/mock-redux-state";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Box from "./Box";
import { MemoryRouter } from "react-router-dom";

const store = createStore(rootReducer, mockReduxState);

describe('Box', () => {
    it('should render without any problem',() => {
        render(
        <MemoryRouter>
        <Provider store={store}>
            <Box />
        </Provider>
        </MemoryRouter>
        )
    })
})