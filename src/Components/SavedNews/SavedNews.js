import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { getSearchResults } from "../../Utils/NewsApi";
import { deleteArticle } from "../../Utils/Constants";
import MobileView from "../MobileView/MobileView";

function SavedNews({ isLoggedIn, handleRegisterModal, newsCard }) {
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const articles = getSearchResults();
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

  const keyWords = extractKeywords(savedArticles);

  return (
    <section className="saved-news ">
      <div>
        {isMobile ? (
          <MobileView currentRoute="saved-news" />
        ) : (
          <SavedNewsHeader
            handleRegisterModal={handleRegisterModal}
            isLoggedIn={isLoggedIn}
          />
        )}

        <div className="saved-news__group">
          <h1 className="saved-news__title">Saved articles </h1>
          <h2 className="saved-news__subtext">
            {currentUser.name}, you have 5 saved articles
          </h2>
          <div className="saved-news__search-grouping">
            <p className="saved-news__search-text">
              By keywords:
              <span className="saved-news__search-text_bold">
                Nature, Yellowstone, and 2 other
              </span>
            </p>
          </div>
        </div>
      </div>
      <NewsCardList newsCard={newsCard} />
      <Footer />
    </section>
  );
}

export default SavedNews;
