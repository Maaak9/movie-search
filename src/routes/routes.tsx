import { RouteObject, createBrowserRouter } from "react-router-dom";
import MoviesRoute from "./movies/MoviesRoute";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MoviesRoute />,
  },
];

const router = createBrowserRouter(routes);
export default router;
