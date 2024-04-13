
const API_URL = 'http://www.omdbapi.com/?apikey=2356a083';

// https://www.omdbapi.com/

export const fetchMovies = (searchTerm: string) => {
  fetch(`${API_URL}&s=${searchTerm}`).then((res) => {
    res.json().then((json) => {
        console.log('Movies', json);
    })
  })
}

export const fetchMovie = () => {
  const movieId = 'tt1201607';
  fetch(`${API_URL}&i=${movieId}`).then((res) => {
    res.json().then((json) => {
        console.log('Movie', json);
    })
  })

}