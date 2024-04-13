import { Movie } from '../../types';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.scss';


const MovieGrid = () => {


  const movies: Movie[] = [
    {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "imdbID": "tt1201607",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Sorcerer's Stone",
        "Year": "2001",
        "imdbID": "tt0241527",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Chamber of Secrets",
        "Year": "2002",
        "imdbID": "tt0295297",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Prisoner of Azkaban",
        "Year": "2004",
        "imdbID": "tt0304141",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Goblet of Fire",
        "Year": "2005",
        "imdbID": "tt0330373",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Order of the Phoenix",
        "Year": "2007",
        "imdbID": "tt0373889",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Deathly Hallows: Part 1",
        "Year": "2010",
        "imdbID": "tt0926084",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Half-Blood Prince",
        "Year": "2009",
        "imdbID": "tt0417741",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
    },
    {
        "Title": "When Harry Met Sally...",
        "Year": "1989",
        "imdbID": "tt0098635",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg"
    },
    {
        "Title": "Dirty Harry",
        "Year": "1971",
        "imdbID": "tt0066999",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzdhMTM2YTItOWU2YS00MTM0LTgyNDYtMDM1OWM3NzkzNTM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    }
  ];

  return (
    <div className='movie-grid'>
      <div className='movie-grid__grid'>
        <>
          { movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </>
      </div>
    </div>
  )
}

export default MovieGrid;