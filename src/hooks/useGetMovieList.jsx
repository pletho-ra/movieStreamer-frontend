import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "../api/myMovieListApi";

const useGetMovieList = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["fetchMovieData"], queryFn: getMovieList });

  return { movies, isLoading, isError };
};

export default useGetMovieList;
