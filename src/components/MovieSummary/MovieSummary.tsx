import { MovieDetails } from "../../types";
import './MovieSummary.scss';

export type MovieSummaryProps = {
  movie: MovieDetails,
}

const MovieSummary = ({
  movie
}: MovieSummaryProps) => {

  return (
    <div className="movie-summary">
      <h2>
        {movie?.Title}
      </h2>
      { movie?.Plot && (
        <p>
          {`Plot: ${movie?.Plot}`}
        </p>
      )}
      { movie?.Actors && (
        <p>{`Actors: ${movie.Actors}`}</p>
      )}
      { movie?.imdbRating && (
        <p>{`Imdb rating: ${movie.imdbRating}`}</p>
      )}
    </div>
  )
}

export default MovieSummary;