import { createContext, useState } from "react";
import useGetMovieList from "../hooks/useGetMovieList";
import { CircularProgress } from "@mui/material";

// Create the context
export const MovieContext = createContext();

// Create a provider component
export const MovieProvider = ({ children }) => {
  const { movies, isLoading, isError } = useGetMovieList();
  //   const [filteredMovies, setFilteredMovies] = useState([]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <h1> Error occured!</h1>;
  }

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};
