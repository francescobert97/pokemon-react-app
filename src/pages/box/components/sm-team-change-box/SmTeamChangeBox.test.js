import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import SmTeamChangeBox from "./SmTeamChangeBox";

describe('SmTeamChangeBox', () => {
    it('should render without any problem',() => {
        render(
            <MemoryRouter>
                <SmTeamChangeBox />
            </MemoryRouter>
    )
    })
})