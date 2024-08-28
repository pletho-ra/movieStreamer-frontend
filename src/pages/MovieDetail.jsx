import MovieDescription from "../components/MovieDetail/MovieDescription";
import MovieDetails from "../components/MovieDetail/MovieDetails";
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              voluptates eaque aspernatur harum suscipit quae laborum tempore
              quisquam sed unde? Sit aperiam exercitationem illo aliquam illum
              hic dolorem sapiente dolore.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full space-y-3">
        <MovieDescription movie={movie.overview} />
        <MovieDetails movie={movie} />
      </div>
    </>
  );
};

export default MovieDetail;
