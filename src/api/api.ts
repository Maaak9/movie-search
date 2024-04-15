import { $movieDetailsData, $movies, $totalMovieResults } from "../store/store";

const API_URL = 'http://www.omdbapi.com/?apikey=2356a083';
export const SEARCH_TERM_QS = 'searchTerm';

// https://www.omdbapi.com/

export const fetchMovies = (searchTerm: string) => {
  fetch(`${API_URL}&s=${searchTerm}`).then((res) => {
    res.json().then((json) => {
      if (json.Response === 'True') {
        $totalMovieResults.set(json.totalResults)
        $movies.set(json.Search);
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