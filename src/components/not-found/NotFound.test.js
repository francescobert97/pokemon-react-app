import { render } from "@testing-library/react";
import React from "react";
import NotFound from './NotFound'
import { MemoryRouter } from "react-router-dom";

describe('NotFound', () => {
    it('should render without any problem',() => {
        render(
                <NotFound />
    )
    })
})