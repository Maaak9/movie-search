import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieSummary from './MovieSummary';

test('Renders MovieSummary component', () => {
  render(
    <MemoryRouter>
      <MovieSummary movie={{
          "Title": "Harry Potter and the Prisoner of Azkaban",
          "Year": "2004",
          "Rated": "PG",
          "Released": "04 Jun 2004",
          "Runtime": "142 min",
          "Genre": "Adventure, Family, Fantasy",
          "Director": "Alfonso Cuarón",
          "Writer": "J.K. Rowling, Steve Kloves",
          "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
          "Plot": "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
          "Language": "English, Latin, Old English",
          "Country": "United Kingdom, United States",
          "Awards": "Nominated for 2 Oscars. 17 wins & 56 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
          "Ratings": [
              {
                  "Source": "Internet Movie Database",
                  "Value": "7.9/10"
              },
              {
                  "Source": "Rotten Tomatoes",
                  "Value": "90%"
              },
              {
                  "Source": "Metacritic",
                  "Value": "82/100"
              }
          ],
          "Metascore": "82",
          "imdbRating": "7.9",
          "imdbVotes": "686,813",
          "imdbID": "tt0304141",
          "Type": "movie",
          "DVD": "01 Jan 2009",
          "BoxOffice": "$250,105,651",
          "Production": "N/A",
          "Website": "N/A",
          "Response": "True"
      }}
    />
  </MemoryRouter>
  );


  const titleElement = screen.getByText(/Harry Potter and the Prisoner of Azkaban/i);
  expect(titleElement).toBeInTheDocument();

  const actorsElement = screen.getByText(/Daniel Radcliffe, Emma Watson, Rupert Grint/i);
  expect(actorsElement).toBeInTheDocument();

  const imdbRatingElement = screen.getByText(/7.9/i);
  expect(imdbRatingElement).toBeInTheDocument();
});
