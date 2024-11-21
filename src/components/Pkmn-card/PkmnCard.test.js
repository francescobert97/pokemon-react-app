import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import PkmnCard from "./PkmnCard";
import rootReducer from "../../redux/reducers/reducers";
import { mockReduxState } from "../../../mocks/mock-redux-state";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { singlePokemon } from "../../../mocks/mock-pkmn-service";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import '@testing-library/jest-dom';

const store = createStore(rootReducer, mockReduxState);

jest.mock('../../utils/capitalizeString/capitalizeString.js', () => ({
    __esModule: true, 
    default: jest.fn((str) => `mocked ${str}`)
  }))
const testFn = jest.fn()
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
    it('handles missing data gracefully',() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <PkmnCard />
                </Provider>
            </MemoryRouter>
        )
    })
    it('should navigate to a different path.',() => {
        render(
            <MemoryRouter initialEntries={['/team']}>
                <Provider store={store}>
                    <Routes>
                        <Route path="/team" element={<PkmnCard pkmn={{...singlePokemon, uniqueId: 3}} reference={'team'}/>} />
                        <Route path="/information/132" element={<div>Test Page</div>} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        )
        
       const link = screen.getByTestId('card-132');
       expect(link).toHaveAttribute('href', '/information/132')
       fireEvent.click(link);
       expect(screen.getByText(/Test Page/i)).toBeInTheDocument();           

    })
})