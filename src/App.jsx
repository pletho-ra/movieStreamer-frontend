// import { useGetMovieList } from "./api/myMovieListApi";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetail from "./pages/MovieDetail";
import SearchMovieList from "./pages/SearchMovieList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/:id" element={<MovieDetail />} />
      <Route path="search" element={<SearchMovieList />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
const App = () => {
  // const { genresMap, isLoading, isError } = useGetGenres();

  // console.log(genresMap);

  return <RouterProvider router={router} />;
};

export default App;
