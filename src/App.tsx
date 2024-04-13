import React, { useEffect } from 'react';
import './App.scss';
import { fetchMovie, fetchMovies } from './api/api';
import MovieCard from './components/MovieCard/MovieCard';

function App() {

  useEffect(() => {
    fetchMovies();
    fetchMovie();
  }, [])

  const movie = {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "imdbID": "tt1201607",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <div style={{ width: "300px" }}>
        <MovieCard movie={movie} />
      </div>
    </div>
  );
}

export default App;
