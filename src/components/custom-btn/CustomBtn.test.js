import { fireEvent, getByLabelText, render, screen } from "@testing-library/react";
import React from "react";
import CustomBtn from "./CustomBtn";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
import '@testing-library/jest-dom';

describe('CustomBtn', () => {
    it('should render without any problem',() => {
        render(
            <MemoryRouter>
                <CustomBtn label="test" />
            </MemoryRouter>
    )
    })
    it('handles missing data gracefully', () => {
        render(<CustomBtn />)
        const fallBackLabel = screen.getByText(/close/i);
        expect(fallBackLabel).toBeInTheDocument();
    })

    it('should navigate to a different path',() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<CustomBtn label="test" pathLink="/test" />} />
                    <Route path="/test" element={<div>Test Page</div>} />
                </Routes> 
            </MemoryRouter>)
            const link = screen.getByText(/Test/i).closest('a');
        expect(link).toHaveAttribute('href', '/test');
        fireEvent.click(link)
        expect(screen.getByText(/Test Page/i)).toBeInTheDocument();           
    })
})