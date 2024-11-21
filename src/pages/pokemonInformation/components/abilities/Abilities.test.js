import { render } from "@testing-library/react";
import React from "react";
import Abilities from "./Abilities";
import { MemoryRouter } from "react-router-dom";
import { singlePokemon } from "../../../../../mocks/mock-pkmn-service";

describe('Abilities', () => {
    it('should render without any problem',() => {
        render(
                <Abilities abilities={singlePokemon.abilities} />
    )
    })
})