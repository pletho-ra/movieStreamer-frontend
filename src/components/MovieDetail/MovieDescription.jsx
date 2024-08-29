const MovieDescription = ({ movie }) => {
  return (
    <div className="rounded w-full bg-gray-300 ">
      <div className="grid grid-flow-row grid-rows-1 mx-4 py-3">
        <h1 className="text-xl font-bold text-black"> Movie Description</h1>
        <p className="text-base py-3"> {movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDescription;
