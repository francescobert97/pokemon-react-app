import { render } from "@testing-library/react"
import React from "react"
import PokemonInfoNavbar from "./PokemonInfoNavbar"
import { MemoryRouter } from "react-router-dom"

describe('PokemonInfoNavbar', () => {
    it('should render without any errors', () => {
        render(
        <MemoryRouter>
            <PokemonInfoNavbar reference={'/'} />
        </MemoryRouter>
        )
    })
})