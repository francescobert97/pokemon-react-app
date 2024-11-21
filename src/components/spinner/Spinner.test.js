import { render } from "@testing-library/react";
import React from "react";
import Spinner from "./Spinner";

describe('Spinner', () => {
    it('should render without any problem',() => {
        render(
                <Spinner />
    )
    })
})