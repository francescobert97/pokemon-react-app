import { render } from "@testing-library/react";
import React from "react";
import IconBoxMenu from "./IconBoxMenu";
import { MemoryRouter } from "react-router-dom";

describe('IconBoxMenu', () => {
    it('should render without any problem',() => {
        render(
            <MemoryRouter>
                <IconBoxMenu btnLabel={'test'} iconName={''} />
            </MemoryRouter>
    )
    })
})