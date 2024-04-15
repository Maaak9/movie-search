import { RouteObject, createBrowserRouter } from "react-router-dom";
import MoviesRoute from "./movies/MoviesRoute";
import MovieDetailsRoute from "./details/DetailsRoute";


export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MoviesRoute />,
    children: [
      {
        id: 'movie',
        path: '/movie/:id',
        element: <MovieDetailsRoute />
      },
    ]
  },
];

const router = createBrowserRouter(routes);
export default router;
