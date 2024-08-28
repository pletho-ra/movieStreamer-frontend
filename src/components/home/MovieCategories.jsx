import { Link } from "react-router-dom";
import { useContext } from "react";

import { HoverContext } from "../../contexts/HoverContext";
import { MovieContext } from "../../contexts/MovieProvider";

const MovieCategories = () => {
  const { movies, genres } = useContext(MovieContext);
  const { hoverMovie, setHoverMovie } = useContext(HoverContext);

  const categorizedMovies = movies.reduce((acc, movie) => {
    movie.genre_ids.forEach((genreId) => {
      const genreName = genres[genreId];
      if (genreName) {
        if (!acc[genreName]) {
          acc[genreName] = [];
        }
        acc[genreName].push(movie);
      }
    });
    return acc;
  }, {});

  const handleMouseEnter = (genre, movieId) => {
    setHoverMovie((prevState) => ({
      ...prevState,
      [genre]: movieId,
    }));
  };

  const handleMouseLeave = (genre) => {
    setHoverMovie((prevState) => ({
      ...prevState,
      [genre]: null,
    }));
  };

  const hideScrollbarStyle = {
    display: "flex",
    overflowX: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      {Object.entries(categorizedMovies).map(([genre, movies]) => (
        <div key={genre} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{genre}</h2>
          <div
            style={{
              ...hideScrollbarStyle,
              WebkitOverflowScrolling: "touch",
            }}
            className="space-x-4 py-2"
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="flex-none w-60 bg-white overflow-hidden relative "
                onMouseEnter={() => {
                  handleMouseEnter(genre, movie.id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(genre);
                }}
              >
                <Link to={`${movie.id}`} className="relative w-full h-full">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-64 object-cover rounded-lg opacity-80 "
                  />
                  <div className="p-2 flex justify-center bg-gray-400 rounded-lg my-3 ">
                    <h3
                      className="text-lg font-semibold truncate"
                      data-tip={movie.title}
                    >
                      {movie.title}
                    </h3>
                  </div>
                  {hoverMovie[genre] === movie.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex flex-col justify-center items-center rounded-lg">
                      <p className="text-lg font-bold">{movie.title}</p>
                      <p>Rating: {movie.vote_average}</p>
                      <p>Release Date: {movie.release_date}</p>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCategories;
