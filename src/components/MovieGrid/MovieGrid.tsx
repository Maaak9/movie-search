import { useStore } from '@nanostores/react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.scss';
import { $movies, $moviesErrorMsg, $totalMovieResults } from '../../store/store';
import { loadMoreMovies } from '../../api/api';

const MovieGrid = () => {
  const movies = useStore($movies);
  const moviesErrorMsg = useStore($moviesErrorMsg);
  const totalMovieResults = useStore($totalMovieResults);
  
  const onClickLoadMore = () => {
    loadMoreMovies();
  }

  return (
    <div className='movie-grid'>
      { moviesErrorMsg && (
        <p className="movie-grid__error">{moviesErrorMsg}</p>
      )}
      <div className='movie-grid__grid' data-testid="movie-grid">
        { movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
      <div className="movie-grid__load-more">
        { totalMovieResults > movies.length && (
          <button onClick={onClickLoadMore}>Load more</button>
        )}
      </div>
    </div>
  )
}

export default MovieGrid;