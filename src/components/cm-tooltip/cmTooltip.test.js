import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CmTooltip from './CmTooltip';
import '@testing-library/jest-dom'; 



describe('Tooltip', () => {
it('should render without crashing', () => {
    render(<CmTooltip tooltipId={123} data={{accuracy: 32, moveDescription: 'testestest'} }/>)
})

it('handles missing data gracefully', () => {
    render(<CmTooltip tooltipId={null} data={{}}/>)
    const fallBack = screen.getByText(/There is no data./i);
    expect(fallBack).toBeInTheDocument();
})

})