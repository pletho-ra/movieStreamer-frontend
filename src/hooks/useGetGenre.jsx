import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../api/myMovieListApi";

const useGetGenre = () => {
  const {
    data: genres,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["fetchGenre"], queryFn: getGenres });

  return { genres, isLoading, isError };
};

export default useGetGenre;
