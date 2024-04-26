import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { SavedArticleContext } from "../Context/SavedArticleContext";
import { useContext } from "react";
import Footer from "../Footer/Footer";

function SavedNews({
  onSelectCard,
  isLoggedIn,
  handleRegisterModal,
  newsCard,
}) {
  const currentUser = useContext({ CurrentUserContext });
  const savedArticles = useContext({ SavedArticleContext });
  return (
    <section className="saved-news ">
      <div>
        <SavedNewsHeader
          handleRegisterModal={handleRegisterModal}
          isLoggedIn={isLoggedIn}
        />

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
