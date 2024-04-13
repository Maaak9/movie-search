import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App', () => {
  render(<App />);
  const headerElement = screen.getByText(/Hello/i);
  expect(headerElement).toBeInTheDocument();
});
