import { fireEvent, render, screen } from '@testing-library/react';
import MovieSearch from './MovieSearch';
import { MemoryRouter } from 'react-router-dom';

describe('Component: MovieSearch', () => {

  test('Renders MovieSearch component', () => {
    render(
      <MemoryRouter>
        <MovieSearch />
      </MemoryRouter>
    );
    const searchElement = screen.getByRole('textbox', { name: /search/i });
    expect(searchElement).toBeInTheDocument();
  });

  test('input changed', () => {
    render(
      <MemoryRouter>
        <MovieSearch />
      </MemoryRouter>
    );
    const searchElement = screen.getByRole('textbox', { name: /search/i });
    expect(searchElement).toBeInTheDocument();
    fireEvent.change(searchElement, { target: { value: 'Harry' }});
    expect(screen.getByDisplayValue('Harry')).toBeInTheDocument();
  })

})