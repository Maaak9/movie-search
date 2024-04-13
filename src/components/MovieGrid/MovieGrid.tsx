import { useStore } from '@nanostores/react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.scss';
import { $movies, $totalMovieResults } from '../../store/store';
import { loadMoreMovies } from '../../api/api';


const MovieGrid = () => {
  const movies = useStore($movies);
  const totalMovieResults = useStore($totalMovieResults);
  
  const onClickLoadMore = () => {
    loadMoreMovies();
  }

  return (
    <div className='movie-grid'>
      <div className='movie-grid__grid'>
        <>
          { movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </>
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