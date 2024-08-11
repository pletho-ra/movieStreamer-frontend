import { useContext } from "react";
import { MovieContext } from "../contexts/MovieListContext";

export const useMovieGenre = () => useContext(MovieContext);
