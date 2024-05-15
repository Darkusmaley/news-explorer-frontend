import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import React, { useContext, useState } from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CurrentUserContext } from "../Context/CurrentUserContext";
import { SavedArticleContext } from "../Context/SavedArticleContext";
import { CurrentPageContext } from "../Context/CurrentPageContext";

const NewsCardList = ({}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticleContext);
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const location = useLocation();

  const [visibleArticles, setVisibleArticles] = useState(-3);

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
        {savedArticles
          .filter((article) => article.owner === currentUser._id)
          .map((article) => {
            <NewsCard newsData={article} key={article.link} />;
          })}
      </div>
      {visibleArticles < savedArticles.length && (
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
