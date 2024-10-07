import { render } from "@testing-library/react";
import React from "react";
import CustomTitleBox from "./CustomTitleBox";

describe('CustomTitleBox', () => {
    it('should render without any problem',() => {
        render(<CustomTitleBox  title={'test'}/>)
    })
})