import { createContext } from "react";
import useGetMovieList from "../hooks/useGetMovieList";
import useGetGenre from "../hooks/useGetGenre";
import CircularWithValueLabel from "../components/reusable/PageLoad";

// Create the context
export const MovieContext = createContext();

// Create a provider component
export const MovieProvider = ({ children }) => {
  const {
    movies,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useGetMovieList();
  const {
    genres,
    isLoading: isGenreLaoding,
    isError: isGenreError,
  } = useGetGenre();

  if (isMovieLoading || isGenreLaoding) {
    return <CircularWithValueLabel />;
  }

  if (isMovieError || isGenreError) {
    return <h1> Error occured!</h1>;
  }
  console.log(genres);

  return (
    <MovieContext.Provider value={{ movies, genres }}>
      {children}
    </MovieContext.Provider>
  );
};
