import React from 'react';
import Moves from './Moves';
import { fireEvent, render, screen } from '@testing-library/react';
import { MOVES } from '../../../../../mock-data-test';

describe('Moves', () => {
  console.log('ficaficafica')
  it('should render without crashing', () => {
    render(<Moves moves={MOVES}/>);

  });

  it('should increment count when button is clicked', () => {
     render(<Moves moves={MOVES} />);
    const element = screen.getByTestId('element-0');
    fireEvent.click(element);
    const tooltip = screen.getByTestId('tooltip-0')

    expect(tooltip).toBeInTheDocument(); // verifica che il tooltip sia presente

  });

  it('should return an api call response', () => {
   
  });

  it('should open a tooltip', () => {
  });
});