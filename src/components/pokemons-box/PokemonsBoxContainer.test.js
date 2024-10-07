import { render } from "@testing-library/react";
import React from "react";
import PokemonsBoxContainer from "./PokemonsBoxContainer";
import rootReducer from "../../redux/reducers/reducers";
import { mockReduxState } from "../../../mocks/mock-redux-state";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
const store = createStore(rootReducer, mockReduxState);

describe('PokemonsBoxContainer', () => {
    it('should render without any problem',() => {
        const pkmnModals = [{operation:'team-to-box', label: 'Move to Box',modalMsg:[ {id: 0 ,message:'would you send it to the box?', hasNextStep: false, condition: null}]}]

        render(
            <MemoryRouter>    
                <Provider store={store}> 
                    <PokemonsBoxContainer pkmns={mockReduxState.team.team} types={pkmnModals} reference={'team'} noPkmncustomMessage={'no'} />
                </Provider> 
            </MemoryRouter>
    )
    })
})