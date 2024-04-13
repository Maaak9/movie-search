import './MovieCard.scss';
import { Movie } from "../../types";

export type MovieCardProps = {
  movie: Movie,
}

const MovieCard = ({
  movie
}: MovieCardProps) => {

  return (
    <div className="movie-card">
      <div className="movie-card__info">
        <h3>{`${movie.Title} - (${movie.Year})`}</h3>
      </div>
      <div className="movie-card__img-container">
        <img
          alt="movie-poster"
          src={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.svg'}
        />
      </div>
    </div>
  );
}

export default MovieCard;