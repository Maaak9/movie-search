import { $movieDetailsData, $movies, $searchTerm, $totalMovieResults } from "../store/store";

const API_URL = 'http://www.omdbapi.com/?apikey=2356a083';

// https://www.omdbapi.com/

export const fetchMovies = (searchTerm: string) => {
  fetch(`${API_URL}&s=${searchTerm}`).then((res) => {
    res.json().then((json) => {
      if (json.Response === 'True') {
        $totalMovieResults.set(json.totalResults)
        $movies.set(json.Search);
        console.log('Movies', json);
      }
    })
  })
}

export const loadMoreMovies = () => {
  const searchTerm = $searchTerm.get();
  const movies = $movies.get()

  fetch(`${API_URL}&s=${searchTerm}&page=${movies.length}`).then((res) => {
    res.json().then((json) => {
      if (json.Response === 'True') {
        $movies.set(movies.concat(json.Search));
      }
    })
  })
}

export const fetchMovie = (movieId: string) => {
  fetch(`${API_URL}&i=${movieId}`).then((res) => {
    res.json().then((json) => {
      if (json.Response === 'True') {
        $movieDetailsData.set(json);
      }
    })
  })
}