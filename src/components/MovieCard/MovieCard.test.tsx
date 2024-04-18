import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';
import { MemoryRouter } from 'react-router-dom';

const MovieCardWithMemortyRouter = () => (
  <MemoryRouter>
    <MovieCard movie={{
      "Title": "Harry Potter and the Deathly Hallows: Part 2",
      "Year": "2011",
      "imdbID": "tt1201607",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    }}
    />
  </MemoryRouter>
);

describe('Component: MovieCard', () => {
  test(('Renders MovieCard component'), () => {
    const { container } = render(<MovieCardWithMemortyRouter />);
    expect(container).toBeInTheDocument()
  });

  test('MovieCard has correct title', () => {
    render(<MovieCardWithMemortyRouter />);
    const titleElement = screen.getByText(/Harry Potter and the Deathly Hallows: Part 2/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('MovieCard has correct year', () => {
    render(<MovieCardWithMemortyRouter />);
    const yearElement = screen.getByText(/2011/i);
    expect(yearElement).toBeInTheDocument();
  })

  test('MovieCard has correct image', () => {
    render(<MovieCardWithMemortyRouter />);
    const image = screen.getByAltText(/movie-poster/i)
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg')
  })

  test('MovieCard has correct link', () => {
    render(<MovieCardWithMemortyRouter />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/movie/tt1201607')
  })
})

