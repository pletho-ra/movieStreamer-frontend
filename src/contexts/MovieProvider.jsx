import { createContext } from "react";
import useGetMovieList from "../hooks/useGetMovieList";
import { CircularProgress } from "@mui/material";
import useGetGenre from "../hooks/useGetGenre";

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
    return <CircularProgress />;
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
