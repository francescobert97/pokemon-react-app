import { render } from "@testing-library/react";
import React from "react";
import Stats from "./Stats";
import { MemoryRouter } from "react-router-dom";
import { singlePokemon } from "../../../../../mocks/mock-pkmn-service";

describe('Stats', () => {
    it('should render without any problem',() => {
        render(
                <Stats stats={singlePokemon.stats} />
    )
    })
})