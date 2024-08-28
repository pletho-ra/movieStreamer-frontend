import {
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import {
  Search as SearchIcon,
  Clear as ClearIcon,
  History,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRecentSearches } from "../../hooks/useRecentSearches";

const SearchMovie = () => {
  const navigate = useNavigate();
  const { recentSearches, addSearch, removeSearch } = useRecentSearches();
  const [filterText, setFilterText] = useState("");
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const containerRef = useRef(null);

  const handleFilterChange = (e) => {
    setFilterText(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    if (filterText.trim()) {
      addSearch(filterText);
      navigate(`/search?q=${encodeURIComponent(filterText)}`);
      setFilterText("");
      setShowRecentSearches(false);
    }
  };

  const handleRecentSearchClick = (search) => {
    setFilterText(search);
    navigate(`/search?q=${encodeURIComponent(search)}`);
    setShowRecentSearches(false);
  };

  const handleClearClick = (e, search) => {
    e.stopPropagation(); // Prevent triggering click on ListItem
    removeSearch(search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowRecentSearches(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center bg-gray-200 rounded-full px-3 py-1">
        <InputBase
          placeholder="Search"
          value={filterText}
          onChange={handleFilterChange}
          inputProps={{
            "aria-label": "search",
            "aria-autocomplete": "list",
            "aria-controls": "recent-searches-list",
          }}
          className="text-gray-700 focus:outline-none"
          onClick={() => setShowRecentSearches(true)} // Show recent searches when input is clicked
          onKeyDown={handleKeyPress}
        />
        <IconButton
          type="button"
          aria-label="search"
          className="p-1"
          onClick={handleSearch}
        >
          <SearchIcon className="text-gray-600" />
        </IconButton>
      </div>
      {showRecentSearches && recentSearches.length > 0 && (
        <Paper
          id="recent-searches-list"
          className="absolute top-full left-0 mt-3 w-full z-10"
          sx={{ borderRadius: "16px", padding: "8px", background: "#e5e7eb" }}
        >
          <div>
            <p className="bg-gray-200 text-gray-500">Recent Searches</p>
          </div>
          <List className=" bg-gray-200">
            {recentSearches.map((search, index) => (
              <ListItem
                key={index}
                onClick={() => handleRecentSearchClick(search)}
                className="flex justify-between items-center cursor-pointer text-gray-500"
                role="option"
              >
                <History fontSize="small " className="mx-1" />

                <ListItemText primary={search} />
                <IconButton
                  edge="end"
                  aria-label="clear"
                  onClick={(e) => handleClearClick(e, search)}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchMovie;
