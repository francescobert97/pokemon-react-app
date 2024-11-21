import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CmTooltip from './CmTooltip';
import '@testing-library/jest-dom'; 



describe('Tooltip', () => {
    it('should render without crashing', () => {
        render(<CmTooltip tooltipId={{'data-testid':`tooltip-123`}} data={{accuracy: 32, moveDescription: 'testestest'}} s/>)
    })

    it('handles missing data gracefully', () => {
        render(<CmTooltip tooltipId={null} data={{}}/>)
        const fallBack = screen.getByText(/There is no data./i);
        expect(fallBack).toBeInTheDocument();
    })

    it('should render dynamic content based on props', () => {
        render(<CmTooltip  tooltipId={{'data-testid':`tooltip-123`}} data={{accuracy: 32, moveDescription: 'testestest'}} />)
        const dynamicContent = screen.getByText(/testestest/i);
        expect(dynamicContent).toBeInTheDocument();
    })

    it('should have proper aria attributes', () => {
        render(<CmTooltip tooltipId={{'data-testid':`tooltip-123`}} data={{}} />);
      
        expect(screen.getByTestId('tooltip-123')).toHaveAttribute('role', 'tooltip');
      });
})