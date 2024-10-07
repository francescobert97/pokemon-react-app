import { render } from "@testing-library/react";
import React from "react";
import Sprites from "./Sprites";
import { singlePokemon } from "../../../../../mocks/mock-pkmn-service";
describe('Sprites', () => {
    it('should render without any problem',() => {
        render(<Sprites sprites={singlePokemon.sprites} />)
    })
})

