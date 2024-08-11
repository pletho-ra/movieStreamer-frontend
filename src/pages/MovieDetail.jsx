// import { useParams } from "react-router-dom";

import useGetMovieDetail from "../hooks/useGetMovieDetail";

const MovieDetail = () => {
  const { movie, isLoading, isError } = useGetMovieDetail();

  console.log(movie);

  if (isLoading) {
    return <h1> Loading.....</h1>;
  }

  if (isError) {
    return <h1>Error..</h1>;
  }

  return (
    <>
      <section className="relative h-[500px] rounded-[.5rem] overflow-hidden w-full my-3">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
            opacity: 0.7,
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="text-wrap text-white px-4 w-1/2 overflow-hidden">
            <h1 className="text-lg md:text-xl lg:text-4xl font-bold mb-4">
              {movie.title}
            </h1>
            <p className="text-sm md:text-base lg:text-xl max-w-2xl mx-auto text-balance">
              {movie.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      {/* Rating */}
    </>
  );
};

export default MovieDetail;
