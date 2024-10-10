import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import PokemonsBoxContainer from "./PokemonsBoxContainer";
import rootReducer from "../../redux/reducers/reducers";
import { mockReduxState } from "../../../mocks/mock-redux-state";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'; 
import { singlePokemon } from "../../../mocks/mock-pkmn-service";

const store = createStore(rootReducer, mockReduxState);
const pkmnModals = [{operation:'team-to-box', label: 'Move to Box',modalMsg:[ {id: 0 ,message:'would you send it to the box?', hasNextStep: false, condition: null}]}]

describe('PokemonsBoxContainer', () => {
    it('should render without any problem',() => {

        render(
            <MemoryRouter>    
                <Provider store={store}> 
                    <PokemonsBoxContainer pkmns={mockReduxState.team.team} types={pkmnModals} reference={'team'} noPkmncustomMessage={'no'} />
                </Provider> 
            </MemoryRouter>
    )
    })

    it('should show a pokemon with any problem',() => {
        render(
        <MemoryRouter>
        <Provider store={store}>
            <PokemonsBoxContainer pkmns={mockReduxState.team.team} types={pkmnModals} reference={'team'} noPkmncustomMessage={'no'} />
        </Provider>
        </MemoryRouter>
        )

        const pkmn = screen.getByTestId('1')
        expect(pkmn).toBeInTheDocument();

    })

    it('should show modal',() => {
        render(
        <MemoryRouter>
        <Provider store={store}>
            <PokemonsBoxContainer pkmns={mockReduxState.team.team} types={pkmnModals} reference={'team'} noPkmncustomMessage={'no'} />
        </Provider>
        </MemoryRouter>
        )
        const pkmn = screen.getAllByText(/Move to Box/i)        
        expect(pkmn[0]).toBeInTheDocument();

        fireEvent.click(pkmn[0])
        const modal = screen.getByText(/would you send it to the box?/i)
        expect(modal).toBeInTheDocument()
    })

    it('should trigger the right function when yes is clicked', async() => {
        const { rerender } = render(
            <MemoryRouter>    
                <Provider store={store}> 
            <PokemonsBoxContainer pkmns={store.getState().team.team} types={pkmnModals} reference={'team'} noPkmncustomMessage={'no'} />
                </Provider> 
            </MemoryRouter>
        )
        const initialTeam = store.getState().team.team;
        expect(initialTeam).toContainEqual(expect.objectContaining({  uniqueId:'1' }));

        const pkmnButton = screen.getAllByText(/Move to Box/i);    
        fireEvent.click(pkmnButton[0]);
        screen.getByText(/ditto/i);
        const yes = screen.getByText(/yes/i);
       

        fireEvent.click(yes);
        expect(yes).not.toBeInTheDocument();

        const updatedState= store.getState().team.team;       
         expect(updatedState).not.toContainEqual(expect.objectContaining({  uniqueId: '1' }));
    
         
         rerender(
            <MemoryRouter>    
                <Provider store={store}> 
            <PokemonsBoxContainer pkmns={updatedState} types={pkmnModals} reference={'team'} noPkmncustomMessage={'no'} />
                </Provider> 
            </MemoryRouter>
        )
             expect(screen.queryByText(/ditto/i)).not.toBeInTheDocument(); 
    
    })

    it('should close the modal when no is clicked', () => {
                render(
                    <MemoryRouter>    
                        <Provider store={store}> 
                    <PokemonsBoxContainer pkmns={store.getState().team.team} types={pkmnModals} reference={'team'} noPkmncustomMessage={'no'} />
                        </Provider> 
                    </MemoryRouter>
                )
                const pkmnButton = screen.getAllByText(/Move to Box/i);    
                fireEvent.click(pkmnButton[0]);
                const no = screen.getByText(/no/i);
                fireEvent.click(no)
                expect(no).not.toBeInTheDocument()
                //capire perche no e yes non spariscono dal dom xke se usi not con getbytext se non ci sono solleva un errore invece qui il test lo passa quindi implica che sono ancora presenti
    })

    it('handles missing data gracefully',() => {

        render(
            <MemoryRouter>    
                <Provider store={store}> 
                    <PokemonsBoxContainer pkmns={{}} types={{}} reference={''} noPkmncustomMessage={''} />
                </Provider> 
            </MemoryRouter>
    )
    })
})