// import { createContext } from "react";
// import useGetMovieList from "../hooks/useGetMovieList";
// // import useGetMovieDetail from "../hooks/useGetMovieDetail";
// import { CircularProgress } from "@mui/material";
// import { checkPropTypes } from "prop-types";
// import useGetGenre from "../hooks/useGetGenre";

// export const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const {
//     movies,
//     isLoading: isListLoading,
//     isError: isListError,
//   } = useGetMovieList();
//   const {
//     genres,
//     isLoading: isGenreLoading,
//     isError: isGenreError,
//   } = useGetGenre();
//   // const { movie, isLoading: isMovieLoading, isError: isMovieError } =useGetMovieDetail();

//   if (isListLoading || isGenreLoading) {
//     return <CircularProgress />;
//   }
//   if (isListError || isGenreError) {
//     return <h1 className="text-xl font-bold"> An Error Occured! </h1>;
//   }

//   return (
//     <MovieContext.Provider value={(movies, genres)}>
//       {children}
//     </MovieContext.Provider>
//   );
// };

// MovieProvider.propTypes = {
//   children: checkPropTypes.node,
// };
