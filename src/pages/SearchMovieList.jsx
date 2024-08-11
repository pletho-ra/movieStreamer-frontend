import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieProvider";
import { Link, useSearchParams } from "react-router-dom";
import { HoverContext } from "../contexts/HoverContext";

const SearchMovieList = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("q") || "";
  console.log(type);

  const { movies } = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const { hoverMovie, setHoverMovie } = useContext(HoverContext);

  useEffect(() => {
    if (type) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(type.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies); // Show all movies if no query
    }
  }, [type, movies]);

  return (
    <>
      <div className=" container flex items-center">
        <div className=" flex items-center flex-grow flex-wrap py-2 justify-between">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className=" w-40 bg-white overflow-hidden relative mx-2"
              onMouseEnter={() => {
                setHoverMovie(movie.id);
              }}
              onMouseLeave={() => {
                setHoverMovie(null);
              }}
            >
              <Link
                to={`../${movie.id}`}
                state={{
                  search: `?${searchParams.toString()}`,
                  type: type,
                }}
                className="relative w-full h-full"
              >
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
                {hoverMovie === movie.id && (
                  <div className=" z-10 absolute bg-black bg-opacity-75 text-white p-4 flex flex-col justify-center items-center rounded-lg top-0 left-0 h-full w-full">
                    <p className="text-lg font-bold">{movie.title}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <p>Release Date: {movie.release_date}</p>
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>
        {/* <SearchMovie filteredMovies={filteredMovies} movie={setFilteredMovies} /> */}
      </div>
    </>
  );
};

export default SearchMovieList;
