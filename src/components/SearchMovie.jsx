import { IconButton, InputBase } from "@mui/material";

import { Search as SearchIcon } from "@mui/icons-material";
// import useGetMovieList from "../hooks/useGetMovieList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useContext, useEffect, useState } from "react";
// import { MovieContext } from "../contexts/MovieProvider";

const SearchMovie = () => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState("");
  // const { filteredMovies, setFilteredMovies } = useContext(MovieContext);
  // const { movies, isLoading, isError } = useGetMovieList();

  // if (isLoading) {
  //   return <CircularProgress />;
  // }

  // if (isError) {
  //   return <h1> Error occured!</h1>;
  // }

  const handleFilter = (e) => {
    e.preventDefault();
    const text = e.target.value.toLowerCase();

    if (text) {
      // Redirect to /search with the query as a query parameter
      navigate(`/search?q=${encodeURIComponent(text)}`);
    }
    setFilterText(text);

    // const filtered = movies.filter(
    //   (movie) => movie.title.toLowerCase().includes(text)
    //   // movie.overview.toLowerCase().includes(filterText)
    // );
    // setFilteredMovies(filtered);
  };

  // console.log(filteredMovies);

  return (
    <div className="flex items-center bg-gray-200 rounded-full px-3 py-1">
      <InputBase
        placeholder="Search"
        value={filterText}
        onChange={(e) => handleFilter(e)}
        inputProps={{ "aria-label": "search" }}
        className="text-gray-700 focus:outline-none"
      />
      <IconButton type="button" aria-label="search" className="p-1">
        <SearchIcon className="text-gray-600" />
      </IconButton>
    </div>
  );
};

export default SearchMovie;
