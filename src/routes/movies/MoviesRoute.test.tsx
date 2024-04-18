import { act, fireEvent, render, screen } from '@testing-library/react';
import MoviesRoute from './MoviesRoute';
import { MemoryRouter } from 'react-router-dom';
import { $movies } from '../../store/store';

const mockedData = [
  {
      "Title": "Harry and His Bucket Full of Dinosaurs",
      "Year": "2005–2015",
      "imdbID": "tt0493094",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGIyZDMyNTEtMDEwZi00MTYxLTg3YmMtZjIyOTZhNzM5MzRlXkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg"
  },
  {
      "Title": "Gospel According to Harry",
      "Year": "1994",
      "imdbID": "tt0106839",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5MjAxMTIyOF5BMl5BanBnXkFtZTcwMjM2MDY4MQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Harry Styles: Kiwi",
      "Year": "2017",
      "imdbID": "tt7547848",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjE5MDYxMjUtYTk4MC00YTg2LTljYWItNDExZGMyZGJlNmFjXkEyXkFqcGdeQXVyNjExMjE5OTM@._V1_SX300.jpg"
  },
  {
      "Title": "Harry: The Interview",
      "Year": "2023",
      "imdbID": "tt25795782",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGQxMjE3NGYtNmVkMi00MDU1LWJmZmEtYzcxMzQwOTY4MjdlXkEyXkFqcGdeQXVyMjE1MDIzMA@@._V1_SX300.jpg"
  },
  {
      "Title": "50 Greatest Harry Potter Moments",
      "Year": "2011",
      "imdbID": "tt2006673",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmRmYTU5ZDgtOWY2Mi00OTZmLTkzNjUtYTRmYTJlNjY3ZjJlXkEyXkFqcGdeQXVyMjk2MTQxMzg@._V1_SX300.jpg"
  },
  {
      "Title": "Lego Harry Potter: Years 5-7",
      "Year": "2011",
      "imdbID": "tt1954614",
      "Type": "game",
      "Poster": "N/A"
  },
  {
      "Title": "Harry",
      "Year": "2013",
      "imdbID": "tt2331972",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGUwNjdmOTEtODJlNy00ZjI4LTkyZGQtNTZkNzRkYzQ3ZGVjXkEyXkFqcGdeQXVyMTA5NzMyOTM@._V1_SX300.jpg"
  },
  {
      "Title": "Target: Harry",
      "Year": "1969",
      "imdbID": "tt0065069",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzkyODIzYTUtYTdjMy00NDBmLTk3NTktN2IwODdmY2MzZWQ1XkEyXkFqcGdeQXVyMjczMDc5MzM@._V1_SX300.jpg"
  },
  {
      "Title": "Wild About Harry",
      "Year": "2009",
      "imdbID": "tt0435711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGRiYmUwMmItNjE3MS00NGViLWIxYTYtNDMyNzEwNzlmMjJiXkEyXkFqcGdeQXVyNTcwMzkyNDE@._V1_SX300.jpg"
  },
  {
      "Title": "How Harry Met Sally...",
      "Year": "2001",
      "imdbID": "tt0305649",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTIwNDkyMjQ3MF5BMl5BanBnXkFtZTYwNDM2MjI5._V1_SX300.jpg"
  }
];

const MoviesRouteWithMemoryRouter = () => (
  <MemoryRouter>
    <MoviesRoute />
  </MemoryRouter>
)

describe('Component: MoviesRoute', () => {
  test(('Renders MoviesRoute component'), () => {
    const { container } = render(<MoviesRouteWithMemoryRouter />);
    expect(container).toBeInTheDocument()
  });

  test('Search for Harry', async() => {
    render(<MoviesRouteWithMemoryRouter />);
    const searchElement = screen.getByPlaceholderText('Search for movie title');
    expect(searchElement).toBeInTheDocument();
  
    fireEvent.change(searchElement, { target: { value: 'Harry' }});
    expect(screen.getByDisplayValue('Harry')).toBeInTheDocument();

    const firstMovie = await screen.findByText(/Harry Potter and the Deathly Hallows: Part 2/i);
    expect(firstMovie).toBeInTheDocument();
  })

  test('Simulate load more button click', async() => {
    render(<MoviesRouteWithMemoryRouter />);
    const searchElement = screen.getByPlaceholderText('Search for movie title');
    expect(searchElement).toBeInTheDocument();
  
    fireEvent.change(searchElement, { target: { value: 'Harry' }});
    expect(screen.getByDisplayValue('Harry')).toBeInTheDocument();

    const firstMovie = await screen.findByText(/Harry Potter and the Deathly Hallows: Part 2/i);
    expect(firstMovie).toBeInTheDocument();

    act(() => {
      const movies = $movies.get()
      $movies.set(movies.concat(mockedData));
    
      const updatedMovies = $movies.get()
      expect(updatedMovies.length).toBe(20);
    })
  })
})
