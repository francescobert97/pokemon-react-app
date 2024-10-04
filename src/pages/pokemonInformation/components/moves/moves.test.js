import React from 'react';
import Moves from './Moves';
import { fireEvent, render, screen } from '@testing-library/react';
import { move as mockMvs, types as mockTypes } from '../../../../../mocks/mock-moves.js';
import '@testing-library/jest-dom'; 

function mockMove(constant) {
  return constant
}
jest.mock('../../../../utils/downloadData', () => ({
  downloadData2: jest.fn(() => (mockMove(mockMvs)))
}))
jest.mock('../../../../services/pokemon.service.js', () => ({
  getPokemonTypeMoves: jest.fn(() => (mockMove(mockTypes)))
}));

/*jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn()
}))
const setState = jest.fn()*/

beforeAll(() => {
  global.fetch = jest.fn(() => Promise.resolve());
});


describe('Moves', () => {
  const mvs = require('../../../../../mock-data-test')
  it('should render without crashing', async () => {  
    render(<Moves moves={mvs.MOVES}/>);
  });
  it('handles missing data gracefully', async () => {
    render(<Moves moves={[]}/>);
    const fallBack = screen.getByText(/There is no data./i);
    expect(fallBack).toBeInTheDocument();
  })

  it('should open and close a tooltip when a move is clicked', async () => {
    render(<Moves moves={mvs.MOVES} />);
    const element =await screen.findByTestId('element-0')
    expect(element).toBeInTheDocument();

  
    fireEvent.click(element)
 
    const tooltip =  screen.getByTestId('tooltip-0')

    expect(tooltip).toBeInTheDocument();
    expect(screen.getByTestId('tooltip-0')).toBeVisible();

    fireEvent.click(element)
    expect(screen.queryByTestId('tooltip-0')).not.toBeInTheDocument();
  });
});



