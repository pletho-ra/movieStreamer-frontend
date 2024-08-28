import { useCallback, useEffect, useState } from "react";

export const useRecentSearches = (limit = 4) => {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    try {
      const storedSearches =
        JSON.parse(localStorage.getItem("recentSearches")) || [];
      setRecentSearches(storedSearches);
    } catch (error) {
      console.error("Failed to load recent searches:", error);
    }
  }, []);

  const addSearch = useCallback(
    (search) => {
      const updatedSearches = [
        search,
        ...recentSearches.filter((item) => item !== search),
      ].slice(0, limit);
      setRecentSearches(updatedSearches);
      try {
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      } catch (error) {
        console.error("Failed to save recent searches:", error);
      }
    },
    [recentSearches, limit]
  );

  const removeSearch = useCallback(
    (search) => {
      const updatedSearches = recentSearches.filter((item) => item !== search);
      setRecentSearches(updatedSearches);
      try {
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      } catch (error) {
        console.error("Failed to update recent searches:", error);
      }
    },
    [recentSearches]
  );

  return { recentSearches, addSearch, removeSearch };
};
