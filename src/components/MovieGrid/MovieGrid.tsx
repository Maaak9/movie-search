import { useStore } from '@nanostores/react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.scss';
import { $movies } from '../../store/store';


const MovieGrid = () => {
  const movies = useStore($movies);

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