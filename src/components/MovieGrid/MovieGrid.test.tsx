/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { MovieGridPure } from './MovieGrid';
import { MemoryRouter } from 'react-router-dom';
import { movies, additionalMovies } from './mockData';

const MovieGridWithMemoryRouter = () => (
  <MemoryRouter>
    <MovieGridPure
      movies={movies}
      totalMovieResults={10}
      onClickLoadMore={() => {}}
    />
  </MemoryRouter>
)

describe('Component: MovieGrid', () => {
  test(('Renders MovieGrid component'), () => {
    const { container } = render(<MovieGridWithMemoryRouter />);
    expect(container).toBeInTheDocument()
  });

  test('Renders 10 movies', () => {
    render(<MovieGridWithMemoryRouter />);
    const grid = screen.getByTestId('movie-grid');
    expect(grid.children.length).toBe(10)
  });

  test('First movie has correct title', () => {
    render(<MovieGridWithMemoryRouter />);
    const firstMovie = screen.getByText(/Harry Potter and the Deathly Hallows: Part 2/i);
    expect(firstMovie).toBeInTheDocument();
  });

  test('No load more button', () => {
    render(<MovieGridWithMemoryRouter />);
    const loadMoreButton = screen.queryByRole('button');
    expect(loadMoreButton).not.toBeInTheDocument();
  });

  test('Renders load more button', () => {
    render(
      <MemoryRouter>
        <MovieGridPure
          movies={movies}
          totalMovieResults={20}
          onClickLoadMore={() => {}}
        />
      </MemoryRouter>
    )
    const loadMoreButton = screen.queryByRole('button');
    expect(loadMoreButton).toBeInTheDocument();
  });

  test('Renders error message', () => {
    render(
      <MemoryRouter>
        <MovieGridPure
          movies={[]}
          totalMovieResults={0}
          onClickLoadMore={() => {}}
          moviesErrorMsg='No movies found'
        />
      </MemoryRouter>
    )
    const errorMessage = screen.getByText(/No movies found/i);
    expect(errorMessage).toBeInTheDocument();
  })

  test('Simulated load more button was click', async() => {
    render(
      <MemoryRouter>
        <MovieGridPure
          movies={movies.concat(additionalMovies)}
          totalMovieResults={10}
          onClickLoadMore={() => {}}
        />
      </MemoryRouter>
    );

    const lastMovie = await screen.findByText(/How Harry Met Sally.../i);
    expect(lastMovie).toBeInTheDocument();
  })
})
