import NewsCard from "../NewsCard/NewsCard";
import { useContext, useState } from "react";

import { SavedArticleContext } from "../Context/SavedArticleContext";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { CurrentPageContext } from "../Context/CurrentPageContext";
import { SearchResultContext } from "../Context/SearchResultContext";

const SavedNewsCardList = ({
  handleDeleteArticle,
  handleSaveArticle,
  isSaved,
}) => {
  const { savedArticles } = useContext(SavedArticleContext);
  const { currentUser } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);
  const { searchResults } = useContext(SearchResultContext);

  const [visibleArticles, setVisibleArticles] = useState(3);

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
          .map((articles) => (
            <NewsCard
              newsData={articles}
              key={articles.link}
              handleDeleteArticle={handleDeleteArticle}
              handleSaveArticle={handleSaveArticle}
              isSaved={isSaved}
            />
          ))}
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

export default SavedNewsCardList;
