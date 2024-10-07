import { render } from "@testing-library/react";
import React from "react";
import CustomModal from "./CustomModal";

describe('CustomModal', () => {
    it('should render without any problem',() => {
        render(<CustomModal message={'test'}></CustomModal>)
    })
})