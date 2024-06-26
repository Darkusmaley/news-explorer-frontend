import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useContext, useState, useEffect } from "react";

import React, { useLocation } from "react-router-dom";

import { CurrentPageContext } from "../Context/CurrentPageContext";
import { SearchResultContext } from "../Context/SearchResultContext";
import { getSavedArticles } from "../../Utils/Api";
import { SavedArticleContext } from "../Context/SavedArticleContext";

const NewsCardList = ({
  handleDeleteArticle,
  handleSaveArticle,
  handleLoginModal,
}) => {
  const { searchResults } = useContext(SearchResultContext);
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const { setSavedArticles } = useContext(SavedArticleContext);

  const location = useLocation();

  const [visibleArticles, setVisibleArticles] = useState(3);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    getSavedArticles(jwt).then(setSavedArticles);
  }, [getSavedArticles]);

  const loadAdditionalArticles = () => {
    setVisibleArticles((visible) => visible + 3);
  };

  return (
    <section className="news-grid">
      {currentPage === "/" ? (
        <h2 className=" news-grid__title">Search results</h2>
      ) : (
        ""
      )}
      <div className="news-grid__list">
        {searchResults.slice(0, visibleArticles).map((articles) => {
          return (
            <NewsCard
              newsData={articles}
              key={articles.link}
              handleDeleteArticle={handleDeleteArticle}
              handleLoginModal={handleLoginModal}
              handleSaveArticle={handleSaveArticle}
            />
          );
        })}
      </div>
      {visibleArticles < searchResults.length && (
        <button
          onClick={loadAdditionalArticles}
          className="news-grid__button_load-articles"
        >
          Show more
        </button>
      )}
    </section>
  );
};

export default NewsCardList;
