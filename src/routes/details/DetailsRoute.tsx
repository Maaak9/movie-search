import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovie } from "../../api/api";
import { useStore } from "@nanostores/react";
import { $movieDetailsData } from "../../store/store";
import Dialog from '@mui/material/Dialog';
import MovieSummary from "../../components/MovieSummary/MovieSummary";

const MovieDetailsRoute = () => {
  const movie = useStore($movieDetailsData);
  const params = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    if (params.id) {
      fetchMovie(params.id);
    }
  }, [params.id])

  const onClose = () => {
    $movieDetailsData.set(null);
    navigate({ pathname: '/', search });
  }

  return (
    <Dialog open onClose={onClose}>
      { movie && (
        <MovieSummary movie={movie} />
      )}
    </Dialog>
  )
}

export default MovieDetailsRoute;