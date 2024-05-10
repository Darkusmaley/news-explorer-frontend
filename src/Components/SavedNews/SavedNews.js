import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import { deleteArticle, getSavedArticles } from "../../Utils/Constants";
import MobileView from "../MobileView/MobileView";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import NothingFound from "../NothingFound/NothingFound";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ isLoggedIn, handleRegisterModal, handleMobileModal }) {
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    const articles = getSavedArticles();
    setSavedArticles(articles);
    setIsLoading(false);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUnsavedArticle = (articleToDelete) => {
    deleteArticle(articleToDelete);
    setSavedArticles((currentArticles) => {
      currentArticles.filter((article) => {
        return article.title !== articleToDelete.title;
      });
    });
  };

  const extractKeywords = (article) => {
    const Keywords = article.flatMap((article) => {
      return article.searchKeyword ? [article.searchKeyword] : [];
    });
    return Array.from(new Set(Keywords));
  };

  const keywords = extractKeywords(savedArticles);

  const firstKeywords = keywords.slice(0, 2).join(",");
  const otherKeywords = keywords.length > 2 ? keywords.length - 2 : 0;

  return (
    <section className="saved-news ">
      <div>
        {isMobile ? (
          <MobileView
            currentRoute="saved-news"
            handleMobileModal={handleMobileModal}
          />
        ) : (
          <SavedNewsHeader
            handleRegisterModal={handleRegisterModal}
            isLoggedIn={isLoggedIn}
          />
        )}

        <div className="saved-news__text_group">
          <h1 className="saved-news__title">Saved articles </h1>
          <h2 className="saved-news__subtext">
            {currentUser.name}, you have {savedArticles.length} saved articles
          </h2>
          <div className="saved-news__search-grouping">
            <p className="saved-news__search-text">
              By keywords:{" "}
              <span className="saved-news__search-text_keywords-primary">
                {firstKeywords}
              </span>
              <span className="saved-news__search-text_keywords-secondary">
                , and {otherKeywords} other
              </span>
            </p>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Preloader />
      ) : savedArticles.length > 0 ? (
        <div className="saved-news__cards">
          <div className="saved-news__card_container">
            {savedArticles.map((article) => (
              <NewsCard
                key={article.title}
                article={article}
                onArticleDelete={handleUnsavedArticle}
                keywords={keywords}
                isInSavedNewsRoute={true}
              />
            ))}
          </div>
        </div>
      ) : (
        // <NothingFound />
        // <NewsCard/>
        <NewsCardList/>
      )}
    </section>
  );
}

export default SavedNews;
