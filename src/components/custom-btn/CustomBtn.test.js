import { render } from "@testing-library/react";
import React from "react";
import CustomBtn from "./CustomBtn";
import { MemoryRouter } from "react-router-dom";

describe('CustomBtn', () => {
    it('should render without any problem',() => {
        render(
            <MemoryRouter>
                <CustomBtn label="test" />
            </MemoryRouter>
    )
    })
})