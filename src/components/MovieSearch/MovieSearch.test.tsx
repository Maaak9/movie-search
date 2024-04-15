import { fireEvent, render, screen } from '@testing-library/react';
import MovieSearch from './MovieSearch';
import { MemoryRouter } from 'react-router-dom';

test('Renders MovieSearch component', () => {

  render(
    <MemoryRouter>
      <MovieSearch />
    </MemoryRouter>
  );

  const searchElement = screen.getByPlaceholderText('Search for movie title');
  expect(searchElement).toBeInTheDocument();

  fireEvent.change(searchElement, { target: { value: 'Harry' }});
  expect(screen.getByDisplayValue('Harry')).toBeInTheDocument();

});
