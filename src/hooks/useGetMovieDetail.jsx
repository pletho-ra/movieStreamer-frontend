import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../api/myMovieListApi";
import { useParams } from "react-router-dom";

const useGetMovieDetail = () => {
  const params = useParams();

  // console.log(params.id);
  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: () => getMovieDetail(params.id),
  });

  return { movie, isLoading, isError };
};

export default useGetMovieDetail;
