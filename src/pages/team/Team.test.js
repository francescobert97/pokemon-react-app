import { render } from "@testing-library/react";
import React from "react";
import rootReducer from "../../redux/reducers/reducers";
import { mockReduxState } from "../../../mocks/mock-redux-state";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Team from "./Team";
import { MemoryRouter } from "react-router-dom";

const store = createStore(rootReducer, mockReduxState);

describe('Team', () => {
    it('should render without any problem',() => {
        render(
        <MemoryRouter>
        <Provider store={store}>
            <Team />
        </Provider>
        </MemoryRouter>
        )
    })
})