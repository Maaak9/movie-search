import { fireEvent, render, screen } from '@testing-library/react';
import MoviesRoute from './MoviesRoute';
import { MemoryRouter } from 'react-router-dom';

test('Renders Movies Route', async() => {

  render(
    <MemoryRouter>
      <MoviesRoute />
    </MemoryRouter>
  );

  const searchElement = screen.getByPlaceholderText('Search for movie title');
  expect(searchElement).toBeInTheDocument();

  fireEvent.change(searchElement, { target: { value: 'Harry' }});
  expect(screen.getByDisplayValue('Harry')).toBeInTheDocument();

  const firstMovie = await screen.findByText(/Harry Potter and the Deathly Hallows: Part 2/i);
  expect(firstMovie).toBeInTheDocument();

  const loadMoreButton = screen.getByText('Load more');
  expect(loadMoreButton).toBeInTheDocument();

  // fireEvent.click(loadMoreButton);

  // const asyncMovie = await screen.findByText(/Wild About Harry/i);
  // expect(asyncMovie).toBeInTheDocument();
});
