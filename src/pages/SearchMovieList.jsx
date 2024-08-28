import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieProvider";
import { Link, useSearchParams } from "react-router-dom";
import { HoverContext } from "../contexts/HoverContext";

const SearchMovieList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { movies } = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const { hoverMovie, setHoverMovie } = useContext(HoverContext);

  useEffect(() => {
    if (query) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [query, movies]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap justify-start -mx-2">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-2 mb-4"
            onMouseEnter={() => setHoverMovie(movie.id)}
            onMouseLeave={() => setHoverMovie(null)}
          >
            <Link
              to={`../${movie.id}`}
              state={{ search: `?${searchParams.toString()}`, type: query }}
              className="block relative w-full h-full group"
              aria-label={`View details for ${movie.title}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-t-lg transition-transform transform group-hover:scale-105"
              />
              <div className="p-2 bg-white shadow-lg rounded-b-lg">
                <h3
                  className="text-md font-semibold truncate"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
              </div>
              {hoverMovie === movie.id && (
                <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex flex-col justify-center items-center rounded-lg transition-opacity duration-300 scale-105 w-full h-full">
                  <p className="text-lg font-bold">{movie.title}</p>
                  <p>Rating: {movie.vote_average.toFixed(2)}</p>
                  <p>Release Date: {movie.release_date}</p>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovieList;
