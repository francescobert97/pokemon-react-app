import React from 'react';
import { render } from '@testing-library/react';
import pokedex from './pokedex';
import Pokedex from './pokedex';

describe('pokedex component', () => {
  it('should render the section correctly', () => {
    const { getByText } = render(<Pokedex />);
    expect(getByText('Ciao Compa')).toBeInTheDocument(); // Cambia il testo per adattarlo alla tua app
  });
});