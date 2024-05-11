import "./SearchForm.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import React, { useState } from "react";
import { getSearchResults } from "../../Utils/NewsApi";

function SearchBar({ isLoggedIn }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    setSearchPerformed(true);
    setIsLoading(true);
    try {
      const fetchedArticles = await getSearchResults(searchTerm);
      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <input
          type="search"
          className="searchbar__input"
          placeholder="Enter topic"
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button className="searchbar__button" onClick={handleSearch}>
          Search
        </button>
      </form>
      {isLoading ? (
        <Preloader />
      ) : (
        searchPerformed &&
        (articles.length > 0 ? (
          <NewsCardList articles={articles} isLoggedIn={isLoggedIn} />
        ) : (
          <NothingFound />
        ))
      )}
    </div>
  );
}

export default SearchBar;
