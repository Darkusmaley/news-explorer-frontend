import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import React, { useContext, useState } from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import { CurrentPageContext } from "../Context/CurrentPageContext";
import { SearchResultContext } from "../Context/SearchResultContext";

const NewsCardList = ({ handleDeleteArticle, handleSaveArticle }) => {
  const { searchResults } = useContext(SearchResultContext);
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const location = useLocation();

  const [visibleArticles, setVisibleArticles] = useState(3);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  const loadAdditionalArticles = () => {
    setVisibleArticles((visible) => visible + 3);
  };

  return (
    <div className="news-card__list">
      {currentPage === "/" ? (
        <h2 className=" news-card__list-title">Search results</h2>
      ) : (
        ""
      )}
      <div className="news-card__list-grid">
        {searchResults.slice(0, visibleArticles).map((articles) => {
          return (
            <NewsCard
              newsData={articles}
              key={articles.link}
              handleDeleteArticle={handleDeleteArticle}
              handleSaveArticle={handleSaveArticle}
            />
          );
        })}
      </div>
      {visibleArticles < searchResults.length && (
        <button
          onClick={loadAdditionalArticles}
          className="news-card-list__button_load-articles"
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default NewsCardList;
