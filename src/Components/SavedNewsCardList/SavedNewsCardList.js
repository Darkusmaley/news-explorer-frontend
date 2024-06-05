import NewsCard from "../NewsCard/NewsCard";
import { useContext, useState, useEffect } from "react";

import { SavedArticleContext } from "../Context/SavedArticleContext";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { CurrentPageContext } from "../Context/CurrentPageContext";
import { SearchResultContext } from "../Context/SearchResultContext";
import { getSavedArticles } from "../../Utils/Api";

const SavedNewsCardList = ({
  handleDeleteArticle,
  handleLoginModal,
  handleSaveArticle,
  isSaved,
}) => {
  const { savedArticles, setSavedArticles } = useContext(SavedArticleContext);
  const { currentUser } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);
  const { searchResults } = useContext(SearchResultContext);

  const [visibleArticles, setVisibleArticles] = useState(3);

  const loadAdditionalArticles = () => {
    setVisibleArticles((visible) => visible + 3);
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    getSavedArticles(jwt).then(setSavedArticles);
  }, [getSavedArticles]);

  return (
    <section className="news-grid">
      {currentPage === "/" ? (
        <h2 className=" news-grid__title">Search results</h2>
      ) : (
        ""
      )}
      <div className="news-grid__list">
        {savedArticles
          .filter((article) => article.owner === currentUser._id)
          .map((articles) => (
            <NewsCard
              newsData={articles}
              key={articles.link}
              handleDeleteArticle={handleDeleteArticle}
              handleLoginModal={handleLoginModal}
              handleSaveArticle={handleSaveArticle}
              isSaved={isSaved}
              
            />
          ))}
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

export default SavedNewsCardList;
