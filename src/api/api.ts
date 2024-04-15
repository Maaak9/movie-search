import { $movieDetailsData, $movies, $moviesErrorMsg, $totalMovieResults } from "../store/store";

const API_URL = 'http://www.omdbapi.com/?apikey=2356a083';
export const SEARCH_TERM_QS = 'searchTerm';

// https://www.omdbapi.com/

export const fetchMovies = (searchTerm: string) => {
  fetch(`${API_URL}&s=${searchTerm}`).then((res) => {
    res.json().then((json) => {
      if (json.Response === 'True') {
        $totalMovieResults.set(json.totalResults)
        $moviesErrorMsg.set('');
        $movies.set(json.Search);
      }
      if (json.Response === 'False') {
        $movies.set([]);
        $totalMovieResults.set(0)
        $moviesErrorMsg.set(json.Error);
      }
    })
  })
}

export const loadMoreMovies = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get(SEARCH_TERM_QS);
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