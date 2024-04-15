import { Outlet } from 'react-router-dom';
import Container from '../../components/Container/Container';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import MovieSearch from '../../components/MovieSearch/MovieSearch';

const MoviesRoute = () => (
  <Container>
    <Outlet />
    <MovieSearch />
    <MovieGrid />
  </Container>
);

export default MoviesRoute;
