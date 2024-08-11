import axios from "axios";
// import { useParams } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const pages = [1, 2, 3];

//get all the movies from different api

export const getMovieList = async () => {
  try {
    const responses = await Promise.all(
      pages.map((page) =>
        axios.get(
          `${API_BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page}`
        )
      )
    );

    // Debugging : Log the responses
    //   responses.forEach((response, index) => {
    //     console.log(`Page ${index + 1}:`, response.data);
    //   });

    return responses.flatMap((response) => response.data.results);
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};
// api to get genre data
export const getGenres = async () => {
  try {
    const genreResponse = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );

    //   console.log(genreResponse.data);

    const genreMap = genreResponse.data.genres.reduce((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});

    return genreMap;
  } catch (error) {
    console.error(error);
    throw new Error({ message: "Error in fetching genre" });
  }
};

//get detail page
export const getMovieDetail = async (id) => {
  const API_URL = "https://api.themoviedb.org/3/movie";
  console.log(id);
  console.log(`${API_URL}/${id}?api_key=${API_KEY}&language=en-US`);

  try {
    const response = await axios.get(
      `${API_URL}/${id}?api_key=${API_KEY}&language=en-US`
    );
    if (!response) {
      console.log("Error in fetch Data");
    }

    return response.data;
  } catch (error) {
    throw new Error({ message: "Error in fetching the movie" });
  }
};
