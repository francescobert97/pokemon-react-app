import { render } from "@testing-library/react";
import React from "react";
import PkmnCard from "./PkmnCard";
import rootReducer from "../../redux/reducers/reducers";
import { mockReduxState } from "../../../mocks/mock-redux-state";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { singlePokemon } from "../../../mocks/mock-pkmn-service";
import { MemoryRouter } from "react-router-dom";
const store = createStore(rootReducer, mockReduxState);

jest.mock('../../utils/capitalizeString.js', () => ({
    __esModule: true, 
    default: jest.fn((str) => `mocked ${str}`)
  }))
describe('PkmnCard', () => {
    it('should render without any problem',() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <PkmnCard  pkmn={{...singlePokemon, uniqueId: 3}} reference={'team'}/>
                </Provider>
            </MemoryRouter>
        )
    })
})