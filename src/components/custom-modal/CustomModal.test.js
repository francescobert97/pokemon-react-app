import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CustomModal from "./CustomModal";
import '@testing-library/jest-dom';

describe('CustomModal', () => {
    it('should render without any problem',() => {
        render(<CustomModal message={'test'}/>)
    })
    it('should display the right message',() => {
        render(<CustomModal message={'test'}/>)

        const message = screen.getByText(/test/i);
        expect(message).toBeInTheDocument();
    })
    it('handles missing data gracefully',() => {
        render(<CustomModal/>)

        const fallback = screen.getByText(/No data./i);
        expect(fallback).toBeInTheDocument();
    })
    it('should have proper aria attributes', () => {
        render(<CustomModal  modalId={{'data-testid':`modal-123`}}/>);
      
        expect(screen.getByTestId('modal-123')).toHaveAttribute('role', 'dialog');
      });

      it('should close correctly',() => {
        const setModalState = jest.fn()
        render(<CustomModal message={'test'}>
            <button onClick={setModalState}>Close</button>
        </CustomModal>)
        const closeBtn = screen.getByText(/Close/i);
        expect(closeBtn).toBeInTheDocument();
        fireEvent.click(closeBtn);
        expect(setModalState).toHaveBeenCalled();
       ///dacontinuare
    })
})